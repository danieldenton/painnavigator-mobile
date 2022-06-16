import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFoodJournals, patchFoodJournal, postFoodJournal } from "./food-journal.service";
import startOfToday from 'date-fns/startOfToday';
import format from 'date-fns/format';

export const FoodJournalContext = createContext();

export const FoodJournalContextProvider = ({ children }) => {
    const [foodJournals, setFoodJournals] = useState([]);
    const [meal, setMeal] = useState("");
    const [foodJournal, setFoodJournal] = useState({ 
        food: "", 
        feelingBefore: "", 
        feelingAfter: "" 
    });
    const [journaledToday, setJournaledToday] = useState(false);

    useEffect(() => {
        const lastIndex = foodJournals?.length - 1;
        const lastJournalDate = foodJournals[lastIndex]?.attributes.date;

        setJournaledToday(lastJournalDate);
    }, []);

    const updateFoodJournal = (journalId) => {
        const mealEntry = {
            [meal.toLowerCase()]: JSON.stringify(foodJournal)
        };
        patchFoodJournal(journalId, mealEntry, setFoodJournals);
        setTimeout(() => {resetFoodJournal(false)}, 1000);
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
        postFoodJournal(mealEntry, setFoodJournals);
        setTimeout(() => {resetFoodJournal(false)}, 1000);
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

    const saveJournals = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@food_journals", jsonValue);
        } catch (e) {
          console.log("error storing", e);
        }
    };
    
    const loadJournals = async () => {
        try {
            const value = await AsyncStorage.getItem("@food_journals");
            if (value !== null) {
            setFoodJournals(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading", e);
        }
    };

    useEffect(() => {
        loadJournals();
      }, []);
    
    useEffect(() => {
        saveJournals(foodJournals);
    }, [foodJournals]);
    
    return (
        <FoodJournalContext.Provider
            value={{
                updateFoodJournal,
                changeEntry,
                completeFoodJournal,
                foodJournal,
                foodJournals,
                journaledToday,
                loadFoodJournals,
                meal,
                resetFoodJournal,
                setFoodJournal,
                setMeal
            }}
        >
            {children}
        </FoodJournalContext.Provider>
    );
};