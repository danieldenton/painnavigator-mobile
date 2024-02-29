import React, { createContext, useState } from "react";
import axios from "axios";
import { API_URL } from "@env";

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
    const score = {
      uid: userUid,
      score: dailyPainScore.score,
      date_time_value: Date.now(),
    };
    setDailyPainScores(score, ...dailyPainScores);
    try {
      const response = await axios.post(
        `${API_URL}/api/v2/daily_pain_scores`,
        score
      );
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
      const score = response.data;
      setDailyPainScores(score, ...dailyPainScores);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDailyPainScore = (uid) => {
    if (dailyPainScore.id) {
      setDailyPainScore(patchDailyPainScore());
    } else {
      setDailyPainScore(postDailyPainScore(uid));
    }
    setDailyPainStep(1);
  };

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
