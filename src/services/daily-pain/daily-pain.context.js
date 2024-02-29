import React, { createContext, useState } from "react";
import axios from "axios";
import { track } from '@amplitude/analytics-react-native';
import { API_URL } from "@env";
import { DAILY_PAIN_EVENTS } from "../../amplitude-events";

export const DailyPainContext = createContext();

export const DailyPainContextProvider = ({ children }) => {
  const [dailyPainScore, setDailyPainScore] = useState({
    id: null,
    score: 5,
    date_time_value: null,
  });
  const [dailyPainScores, setDailyPainScores] = useState([]);
  const [dailyPainStep, setDailyPainStep] = useState(0);

  async function getDailyPainScores(userUid) {
    try {
      const response = await axios.get(`${API_URL}/api/v2/daily_pain_scores`, {
        params: {
          uid: userUid,
        },
      });
      setDailyPainScores(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function postDailyPainScore(userUid) {
    try {
      const response = await axios.post(`${API_URL}/api/v2/daily_pain_scores`, {
        uid: userUid,
        score: dailyPainScore.score,
        date_time_value: Date.now(),
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function patchDailyPainScore() {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v2/daily_pain_scores/${dailyPainScore.id}`,
        {
          score: dailyPainScore.score,
          date_time_value: Date.now(),
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const handleDailyPainScore = () => {
    if (dailyPainScore.id) {
        setDailyPainScore(patchDailyPainScore())
        track(DAILY_PAIN_EVENTS.EDIT_DAILY_PAIN_SCORE)
    } else {
        setDailyPainScore(postDailyPainScore(uid))
        track(DAILY_PAIN_EVENTS.LOG_DAILY_PAIN_SCORE)
    }  
    setDailyPainStep(1)
}

  return (
    <DailyPainContext.Provider
      value={{
        getDailyPainScores,
        postDailyPainScore,
        patchDailyPainScore,
        handleDailyPainScore,
        dailyPainScore,
        setDailyPainScore,
        dailyPainScores,
        setDailyPainScores,
        dailyPainStep,
        setDailyPainStep,
      }}
    >
      {children}
    </DailyPainContext.Provider>
  );
};
