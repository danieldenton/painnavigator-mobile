import React, { useState, createContext } from "react";
import { getFoodJournals, patchFoodJournal, postFoodJournal } from "./food-journal.service";

export const FoodJournalContext = createContext();

export const FoodJournalContextProvider = ({ children }) => {
    const [foodJournals, setFoodJournals] = useState({});
    const [journalComplete, setJournalComplete] = useState(false);
    const [meal, setMeal] = useState("");
    const [newFoodJournalEntry, setNewFoodJournalEntry] = useState({
        food: "", 
        feelingBefore: "", 
        feelingAfter: "", 
    });

    const completeFoodJournal = () => {
        const journalEntry = {
            [meal.toLowerCase()]: JSON.stringify(newFoodJournalEntry)
        };
        postFoodJournal(journalEntry);
        setJournalComplete(true);
        resetFoodJournal();
    };
    
    const loadFoodJournals = () => {
        setFoodJournals(getFoodJournals());
    };

    const resetFoodJournal = () => {
        setMeal("");

        setNewFoodJournalEntry({ 
            food: "", 
            feelingBefore: "", 
            feelingAfter: "", 
        });
    };
    
    const updateFoodJournal = (journalId, journalUpdate) => {
        patchFoodJournal(journalId, journalUpdate);
        loadFoodJournals();
    };
    
    return (
        <FoodJournalContext.Provider
            value={{
                completeFoodJournal,
                foodJournals,
                journalComplete,
                meal,
                setMeal, 
                newFoodJournalEntry,
                loadFoodJournals,
                resetFoodJournal,
                setJournalComplete,
                setNewFoodJournalEntry,
                updateFoodJournal
            }}
        >
            {children}
        </FoodJournalContext.Provider>
    );
};