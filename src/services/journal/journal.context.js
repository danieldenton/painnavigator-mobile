import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";
import { PainJournalContext } from "../pain-journal/pain-journal.context";
import { MoodJournalContext } from "../mood-journal/mood-journal.context";
import { FoodJournalContext } from "../food-journal/food-journal.context";
import { getJournals } from "./journal.service";

export const JournalContext = createContext();

export const JournalContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext);
    const { setPainJournals, setPainGraphData } = useContext(PainJournalContext);
    const { setMoodJournals } = useContext(MoodJournalContext);
    const { setFoodJournals } = useContext(FoodJournalContext);

    const fetchJournals = () => {
        getJournals(setPainJournals, setMoodJournals, setFoodJournals, setPainGraphData)
    };

    return (
        <JournalContext.Provider
            value={{
                fetchJournals
            }}
        >
            {children}
        </JournalContext.Provider>
    );
};