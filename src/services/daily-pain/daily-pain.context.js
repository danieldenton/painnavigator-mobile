import React, { createContext, useState, useEffect } from "react";
import { formatDate, timeZonedTodaysDate } from "../../utils";
import {
  getDailyPainScores,
  postDailyPainScore,
  patchDailyPainScore,
} from "./daily-pain.service";

export const DailyPainContext = createContext();

export const DailyPainContextProvider = ({ children }) => {
  const [dailyPainScore, setDailyPainScore] = useState({
    id: null,
    score: 5,
    date_time_value: null,
  });
  const [dailyPainScores, setDailyPainScores] = useState([]);
  const [dailyPainStep, setDailyPainStep] = useState(0);
  const [painScoreLoggedToday, setPainScoreLoggedToday] = useState(false);

  const loadDailyPainScores = async (uid) => {
    const painScores = await getDailyPainScores(uid);
    setDailyPainScores(painScores);
  };

  const handleDailyPainScore = async (uid) => {
    if (dailyPainScore.id) {
      patchDailyPainScore(dailyPainScore);
    } else {
      postDailyPainScore(uid, dailyPainScore);
      setPainScoreLoggedToday(true);
    }
    setDailyPainStep(1);
  };

  useEffect(() => {
    if (painScoreLoggedToday) {
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
        painScoreLoggedToday,
        setPainScoreLoggedToday,
      }}
    >
      {children}
    </DailyPainContext.Provider>
  );
};
