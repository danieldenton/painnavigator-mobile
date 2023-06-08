import React, { createContext, useEffect, useState, useContext } from "react";
// import { FOOD_JOURNAL_EVENTS } from "../../amplitude-events";

export const DailyPainContext = createContext();

export const DailyPainContextProvider = ({ children }) => {
    const [dailyPainScore, setDailyPainScore] = useState({
        id: null,
        score: 5,
        created_at: null,
        updated_at: null
    })
    const [dailyPainScores, setDailyPainScores] = useState([])

    

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
                dailyPain
            }}
        >
            {children}
        </DailyPainContext.Provider>
    );
}