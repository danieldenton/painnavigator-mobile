import React, { createContext, useState } from "react";

export const DailyPainContext = createContext();

export const DailyPainContextProvider = ({ children }) => {
    const [dailyPainScore, setDailyPainScore] = useState({
        id: null,
        score: 5,
        date_time_value: null
    })
    const [dailyPainScores, setDailyPainScores] = useState([])
    const [dailyPainStep, setDailyPainStep] = useState(0)

    const dailyPain = (change, state) => {
        setDailyPainScore(score => ({
            ...score,
            [state]: change
        }));
    };

    return (
        <DailyPainContext.Provider
            value={{
                dailyPainScore,
                setDailyPainScore,
                dailyPainScores,
                setDailyPainScores,
                dailyPain,
                dailyPainStep,
                setDailyPainStep
            }}
        >
            {children}
        </DailyPainContext.Provider>
    );
}