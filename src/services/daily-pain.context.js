import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { formatDate, timeZonedTodaysDate } from "../utils";
import { AuthenticationContext } from "./authentication.context";

export const DailyPainContext = createContext();

export const DailyPainContextProvider = ({ children }) => {
  const [dailyPainScore, setDailyPainScore] = useState({
    id: null,
    score: 5,
    date_time_value: null,
  });
  const [dailyPainScores, setDailyPainScores] = useState([]);
  const [dailyPainStep, setDailyPainStep] = useState(0);
  const lastDailyPainScoreDate = formatDate(
    dailyPainScores[dailyPainScores.length - 1]?.date_time_value
  );
  const painScoreToday = lastDailyPainScoreDate === timeZonedTodaysDate
  const { uid } = useContext(AuthenticationContext)

  async function getDailyPainScores() {
    try {
      const response = await axios.get(`${API_URL}/api/v2/daily_pain_scores`, {
        params: {
          uid: uid,
        },
      });
      setDailyPainScores(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function postDailyPainScore(uid) {
    try {
      const response = await axios.post(`${API_URL}/api/v2/daily_pain_scores`, {
        uid: uid,
        score: dailyPainScore.score,
        date_time_value: Date.now(),
      });
      setDailyPainStep(1)
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
      setDailyPainStep(1)
      return response.data;
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
  };

  useEffect(() => {
    getDailyPainScores()
  }, [])

  useEffect(() => {
    if (painScoreToday) {
      setDailyPainScore(dailyPainScores[dailyPainScores.length - 1]);
      setDailyPainStep(1);
    } else {
      setDailyPainScore({
        id: null,
        score: 5,
        date_time_value: null,
      });
    }
  }, [dailyPainScores]);

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
        painScoreToday,
      }}
    >
      {children}
    </DailyPainContext.Provider>
  );
};
