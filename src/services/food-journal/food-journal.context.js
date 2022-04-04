import React, { useState, createContext, useEffect } from "react";
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

    const journalEntry = {[meal.toLowerCase()]: JSON.stringify(newFoodJournalEntry)};

    const addFoodJournalEntry = (journalId) => {
        patchFoodJournal(journalId, journalEntry);
        setJournalComplete(true);
        resetFoodJournal();
        loadFoodJournals();
    };

    const completeFoodJournal = () => {
        postFoodJournal(journalEntry);
        setJournalComplete(true);
        resetFoodJournal();
        loadFoodJournals();
    };

    const handleChange = (change, name) => {
        setNewFoodJournalEntry(journal => ({
            ...journal,
            [name]: change
        }));
    };
    
    const loadFoodJournals = () => {
        getFoodJournals(setFoodJournals);
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
                foodJournals,
                journalComplete,
                setJournalComplete,
                meal,
                setMeal,
                handleChange,
                newFoodJournalEntry,
                setNewFoodJournalEntry,
                addFoodJournalEntry,
                completeFoodJournal,
                loadFoodJournals,
                resetFoodJournal,
                updateFoodJournal
            }}
        >
            {children}
        </FoodJournalContext.Provider>
    );
};