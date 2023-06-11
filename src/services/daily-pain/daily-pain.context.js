import React, { createContext, useEffect, useState, useContext } from "react";
import { formatDate, timeZonedTodaysDate } from "../../infrastructure/helpers";
// import { FOOD_JOURNAL_EVENTS } from "../../amplitude-events";

export const DailyPainContext = createContext();

export const DailyPainContextProvider = ({ children }) => {
    const [dailyPainScore, setDailyPainScore] = useState({
        id: null,
        score: 5,
        date_time_value: null
    })
    const [dailyPainScores, setDailyPainScores] = useState([])
    const [todaysPain, setTodaysPain] = useState(false)
    

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
                todaysPain,
                setTodaysPain
            }}
        >
            {children}
        </DailyPainContext.Provider>
    );
}