import React, { useState, createContext } from "react";
import { getFoodJournals, patchFoodJournal, postFoodJournal } from "./food-journal.service";

export const FoodJournalContext = createContext();

export const FoodJournalContextProvider = ({ children }) => {
    const [foodJournals, setFoodJournals] = useState({});
    const [journalComplete, setJournalComplete] = useState(false);
    const [hasJourneledToday, setHasJournaledToday] = useState(false);
    const [meal, setMeal] = useState("");
    const [newFoodJournalEntry, setNewFoodJournalEntry] = useState({ food: "", feelingBefore: "", feelingAfter: "" });
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
        // TODO: In the future, setHasJournalToday will be moved to the food journal fetch request 
        // which will contain a boolean value for journaledToday from the backend.
        setHasJournaledToday(true);
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
        setNewFoodJournalEntry({ food: "", feelingBefore: "", feelingAfter: "" });
    };
    
    return (
        <FoodJournalContext.Provider
            value={{
                addFoodJournalEntry,
                completeFoodJournal,
                foodJournals,
                handleChange,
                hasJourneledToday,
                journalComplete,
                loadFoodJournals,
                meal,
                newFoodJournalEntry,
                resetFoodJournal,
                setJournalComplete,
                setMeal,
                setNewFoodJournalEntry
            }}
        >
            {children}
        </FoodJournalContext.Provider>
    );
};