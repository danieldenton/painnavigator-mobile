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

    const journalEntry = {
        [meal.toLowerCase()]: JSON.stringify(newFoodJournalEntry)
    };

    const handleChange = (change, name) => {
        setNewFoodJournalEntry(journal => ({
            ...journal,
            [name]: change
        }));
    };

    const setFeelingBefore = (feelingBefore) => {
        setNewFoodJournalEntry(journal => ({
            ...journal,
            feelingBefore: feelingBefore
        }));
    };

    const setFeelingAfter = (feelingAfter) => {
        setNewFoodJournalEntry(journal => ({
            ...journal,
            feelingAfter: feelingAfter
        }));
    };

    const completeFoodJournal = () => {
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

    const newEntryInTodaysJournal = () => {
        patchFoodJournal(todaysJournal.id, journalEntry);
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
                setFeelingBefore,
                setFeelingAfter,
                newFoodJournalEntry,
                setNewFoodJournalEntry,
                newEntryInTodaysJournal,
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