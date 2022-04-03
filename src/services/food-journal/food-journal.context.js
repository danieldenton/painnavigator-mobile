import React, { useState, createContext } from "react";
import { getFoodJournals, patchFoodJournal, postFoodJournal } from "./food-journal.service";

export const FoodJournalContext = createContext();

export const FoodJournalContextProvider = ({ children }) => {
    const [foodJournals, setFoodJournals] = useState({});
    const [journalComplete, setJournalComplete] = useState(false);
    const [meal, setMeal] = useState("");
    const [todaysJournal, setTodaysJournal] = useState(null);
    const [newFoodJournalEntry, setNewFoodJournalEntry] = useState({
        food: "", 
        feelingBefore: "", 
        feelingAfter: "", 
    });
    
    const handleChange = (change, name) => {
        setNewFoodJournalEntry(journal => ({
            ...journal,
            [name]: change
        }));
    };

    const journalEntry = {[meal.toLowerCase()]: JSON.stringify(newFoodJournalEntry)};

    const completeFoodJournal = () => {
        postFoodJournal(journalEntry);
        setJournalComplete(true);
        loadFoodJournals();
        resetFoodJournal();
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

    const addFoodJournalEntry = (journalId) => {
        patchFoodJournal(journalId, journalEntry);
        setJournalComplete(true);
        loadFoodJournals();
    };
    
    const updateFoodJournal = (journalId, journalUpdate) => {
        patchFoodJournal(journalId, journalUpdate);
        loadFoodJournals();
    };
    
    return (
        <FoodJournalContext.Provider
            value={{
                todaysJournal,
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