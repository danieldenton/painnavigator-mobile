import React, { createContext, useEffect, useState, useContext } from "react";
import { formatDate, timeZonedTodaysDate } from "../../infrastructure/helpers";
import { getDailyPainScores } from "./daily-pain.service";
import { AuthenticationContext } from "../authentication/authentication.context";
// import { FOOD_JOURNAL_EVENTS } from "../../amplitude-events";

export const DailyPainContext = createContext();

export const DailyPainContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext)
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