import React, { useState, createContext } from "react";
import { getFoodJournals, patchFoodJournal, postFoodJournal } from "./food-journal.service";

export const FoodJournalContext = createContext();

export const FoodJournalContextProvider = ({ children }) => {
    const [foodJournals, setFoodJournals] = useState({});
    const [journalComplete, setJournalComplete] = useState(false);
    const [hasJourneledToday, setHasJournaledToday] = useState(false);
    const [meal, setMeal] = useState("");
    const [foodJournal, setFoodJournal] = useState({ 
        food: "", 
        feelingBefore: "", 
        feelingAfter: "" 
    });

    const addFoodJournalEntry = (journalId) => {
        const mealEntry = {
            [meal.toLowerCase()]: JSON.stringify(foodJournal)
        };
        patchFoodJournal(journalId, mealEntry);
        setJournalComplete(true);
        resetFoodJournal();
        loadFoodJournals();
    };

    const changeEntry = (change, state) => {
        setFoodJournal(journal => ({
            ...journal,
            [state]: change
        }));
    };

    const completeFoodJournal = () => {
        const mealEntry = {
            [meal.toLowerCase()]: JSON.stringify(foodJournal)
        };
        postFoodJournal(mealEntry);
        setJournalComplete(true);
        // TODO: In the future, setHasJournalToday will be moved to the food journal fetch request 
        // which will contain a boolean value for journaledToday from the backend.
        setHasJournaledToday(true);
        resetFoodJournal();
        loadFoodJournals();
    };

    const loadFoodJournals = () => {
        getFoodJournals(setFoodJournals);
    };

    const resetFoodJournal = () => {
        setMeal("");
        setFoodJournal({ 
            food: "", 
            feelingBefore: "", 
            feelingAfter: "" 
        });
    };
    
    return (
        <FoodJournalContext.Provider
            value={{
                addFoodJournalEntry,
                changeEntry,
                completeFoodJournal,
                foodJournal,
                foodJournals,
                hasJourneledToday,
                journalComplete,
                loadFoodJournals,
                meal,
                resetFoodJournal,
                setFoodJournal,
                setJournalComplete,
                setMeal
            }}
        >
            {children}
        </FoodJournalContext.Provider>
    );
};