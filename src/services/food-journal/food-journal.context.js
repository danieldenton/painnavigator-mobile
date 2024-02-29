import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { AuthenticationContext } from "../authentication.context";
import { FOOD_JOURNAL_EVENTS } from "../../amplitude-events";
import { formatDate, timeZonedTodaysDate } from "../../utils";

export const FoodJournalContext = createContext();

export const FoodJournalContextProvider = ({ children }) => {
  const [foodJournals, setFoodJournals] = useState([]);
  const [meal, setMeal] = useState("");
  const [foodJournal, setFoodJournal] = useState({
    food: "",
    feelingBefore: "",
    feelingAfter: "",
  });
  const [trackLogMealEvent, setTrackLogMealEvent] = useState("");
  const [trackExitEvent, setTrackExitEvent] = useState("");
  const { uid } = useContext(AuthenticationContext);
  const lastFoodJournal = formatDate(foodJournals[0]?.date_time_value);
  const foodJournalToday = lastFoodJournal === timeZonedTodaysDate;

  const getFoodJournals = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v2/food_journals`, {
        params: { uid: uid },
      });
      setFoodJournals(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  async function postFoodJournal(journalEntry) {
    try {
      const response = await axios.post(`${API_URL}/api/v1/food_journals`, {
        food_journal: journalEntry,
        uid: uid,
      });
      const data = response.data.data.attributes;
      setFoodJournals((prevJournals) => [data, ...prevJournals]);
    } catch (error) {
      console.error(error);
    }
  }

  async function patchFoodJournal(journalId, journalEntry, setFoodJournals) {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v1/food_journals/${journalId}`,
        { food_journal: journalEntry }
      );
      const data = response.data.data.attributes;
      setFoodJournals((prevJournals) =>
        prevJournals.map((journal) =>
          journal.id === journalId ? data : journal
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  const updateFoodJournal = (journalId) => {
    const mealEntry = {
      [meal.toLowerCase()]: JSON.stringify(foodJournal),
    };
    patchFoodJournal(journalId, mealEntry, setFoodJournals);
    setTimeout(() => {
      resetFoodJournal(false);
    }, 1000);
  };

  const changeEntry = (change, state) => {
    setFoodJournal((journal) => ({
      ...journal,
      [state]: change,
    }));
  };

  const completeFoodJournal = () => {
    const mealEntry = {
      [meal.toLowerCase()]: JSON.stringify(foodJournal),
      date_time_value: Date.now(),
    };
    postFoodJournal(mealEntry);
    setTimeout(() => {
      resetFoodJournal(false);
    }, 1000);
  };

  const loadFoodJournals = () => {
    getFoodJournals(setFoodJournals);
  };

  const resetFoodJournal = () => {
    setMeal("");
    setFoodJournal({
      food: "",
      feelingBefore: "",
      feelingAfter: "",
    });
  };

  useEffect(() => {
    getFoodJournals();
  }, []);

  useEffect(() => {
    if (meal === "Breakfast") {
      setTrackLogMealEvent(FOOD_JOURNAL_EVENTS.BREAKFAST_LOG_MEAL);
      setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_BREAKFAST);
    } else if (meal === "Lunch") {
      setTrackLogMealEvent(FOOD_JOURNAL_EVENTS.LUNCH_LOG_MEAL);
      setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_LUNCH);
    } else if (meal === "Dinner") {
      setTrackLogMealEvent(FOOD_JOURNAL_EVENTS.DINNER_LOG_MEAL);
      setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_DINNER);
    } else if (meal === "Snacks") {
      setTrackLogMealEvent(FOOD_JOURNAL_EVENTS.SNACKS_LOG_MEAL);
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
        loadFoodJournals,
        meal,
        trackLogMealEvent,
        trackExitEvent,
        resetFoodJournal,
        setFoodJournal,
        setFoodJournals,
        setMeal,
        foodJournalToday,
      }}
    >
      {children}
    </FoodJournalContext.Provider>
  );
};
