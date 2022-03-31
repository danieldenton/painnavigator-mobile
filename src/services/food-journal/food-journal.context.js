import React, { useState, createContext } from "react";
import { getFoodJournals, patchFoodJournal, postFoodJournal } from "./food-journal.service";

export const FoodJournalContext = createContext();

export const FoodJournalContextProvider = ({ children }) => {
    const [foodJournals, setFoodJournals] = useState({});
    const [journalComplete, setJournalComplete] = useState(false);
    const [newFoodJournalEntry, setNewFoodJournalEntry] = useState({
        meal: 0,
        food: "", 
        feelingBefore: 0, 
        feelingAfter: 0, 
    });

    const completeFoodJournal = () => {
        postFoodJournal(newFoodJournalEntry);
        setJournalComplete(true);
        resetFoodJournal();
    };
    
    const loadFoodJournals = () => {
        setFoodJournals(getFoodJournals());
    };

    const resetFoodJournal = () => {
        setNewFoodJournalEntry({ 
            meal: 0,
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