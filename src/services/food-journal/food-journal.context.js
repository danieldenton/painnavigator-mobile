import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFoodJournals, patchFoodJournal, postFoodJournal } from "./food-journal.service";
import { AuthenticationContext } from "../authentication/authentication.context";
import { FOOD_JOURNAL_EVENTS } from "../../amplitude-events";

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
    const [trackLogMealEvent, setTrackLogMealEvent] = useState("")
    const [trackExitEvent, setTrackExitEvent] = useState("")
    const { user } = useContext(AuthenticationContext);

    useEffect(() => {
        if (!foodJournals || foodJournals.length < 1) {
            // Set to false by default if desired:
            setJournaledToday(false);
            return;
          }
      
          const lastIndex = foodJournals.length - 1;
          const lastJournalDate = foodJournals[lastIndex]
          console.log(lastJournalDate)
        //   setJournaledToday(Boolean(lastJournalDate));
    }, [foodJournals]);

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
            [meal.toLowerCase()]: JSON.stringify(foodJournal),
            date_time_value: Date.now(),
        };
        postFoodJournal(user.user.uid, mealEntry, setFoodJournals);
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
          console.log("error storing food journals", e);
        }
    };
    
    const loadJournals = async () => {
        try {
            const value = await AsyncStorage.getItem("@food_journals");
            if (value !== null) {
            setFoodJournals(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading food journals", e);
        }
    };

    useEffect(() => {
        if (meal === "Breakfast") {
          setTrackLogMealEvent(FOOD_JOURNAL_EVENTS.BREAKFAST_LOG_MEAL)
          setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_BREAKFAST);
        } else if (meal === "Lunch") {
          setTrackLogMealEvent(FOOD_JOURNAL_EVENTS.LUNCH_LOG_MEAL)
          setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_LUNCH);
        } else if (meal === "Dinner") {
          setTrackLogMealEvent(FOOD_JOURNAL_EVENTS.DINNER_LOG_MEAL) 
          setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_DINNER);
        } else if (meal === "Snacks") {
          setTrackLogMealEvent(FOOD_JOURNAL_EVENTS.SNACKS_LOG_MEAL)
          setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_SNACKS);
        }
      }, [meal]);
    
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
                trackLogMealEvent,
                trackExitEvent,
                resetFoodJournal,
                setFoodJournal,
                setFoodJournals,
                setMeal
            }}
        >
            {children}
        </FoodJournalContext.Provider>
    );
};