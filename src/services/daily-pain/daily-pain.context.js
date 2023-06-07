import React, { createContext, useEffect, useState, useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
// import { FOOD_JOURNAL_EVENTS } from "../../amplitude-events";

export const DailyPainContext = createContext();

export const DailyPainContextProvider = ({ children }) => {
    const [dailyPainScore, setDailyPainScore] = useState({
        score: 5,
        created_at: null
    })
    const [dailyPainScores, setDailyPainScores] = useState([])
    const { user } = useContext(AuthenticationContext);

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
                setDailyPainScores
            }}
        >
            {children}
        </DailyPainContext.Provider>
    );
}