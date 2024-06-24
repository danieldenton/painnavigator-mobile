import React, { createContext, useState, useEffect } from "react";
import { formatDate, timeZonedTodaysDate } from "../../utils";
import {
  getDailyPainScores,
  postDailyPainScore,
  patchDailyPainScore,
} from "./daily-pain";

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
  const painScoreToday = lastDailyPainScoreDate === timeZonedTodaysDate;

  const loadDailyPainScores = async (uid) => {
    const painScores = await getDailyPainScores(uid);
    setDailyPainScores(painScores);
  };

  const handleDailyPainScore = async (uid) => {
    if (dailyPainScore.id) {
      patchDailyPainScore(dailyPainScore);
    } else {
      postDailyPainScore(uid, dailyPainScore);
    }
    setDailyPainStep(1);
  };

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
        loadDailyPainScores,
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
