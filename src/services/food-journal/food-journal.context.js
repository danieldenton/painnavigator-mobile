import React, { createContext, useState } from "react";
import { formatDate, timeZonedTodaysDate } from "../../utils";
import { postFoodJournal, patchFoodJournal } from "./food-journal.service";

export const FoodJournalContext = createContext();

export const FoodJournalContextProvider = ({ children }) => {
  const [foodJournals, setFoodJournals] = useState([]);
  const [meal, setMeal] = useState("");
  const [foodJournal, setFoodJournal] = useState({
    food: "",
    feelingBefore: "",
    feelingAfter: "",
  });
  const lastFoodJournal = formatDate(foodJournals[0]?.date_time_value);
  const foodJournalToday = lastFoodJournal === timeZonedTodaysDate;

  const updateFoodJournal = async (journalId) => {
    const mealEntry = {
      [meal.toLowerCase()]: JSON.stringify(foodJournal),
    };
    const data = await patchFoodJournal(journalId, mealEntry);
    setFoodJournals((prevJournals) =>
      prevJournals.map((journal) => (journal.id === journalId ? data : journal))
    );
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

  const completeFoodJournal = async (uid) => {
    const mealEntry = {
      [meal.toLowerCase()]: JSON.stringify(foodJournal),
      date_time_value: Date.now(),
    };
    const data = await postFoodJournal(uid, mealEntry);
    setFoodJournals((prevJournals) => [data, ...prevJournals]);
    setTimeout(() => {
      resetFoodJournal(false);
    }, 1000);
  };

  const resetFoodJournal = () => {
    setMeal("");
    setFoodJournal({
      food: "",
      feelingBefore: "",
      feelingAfter: "",
    });
  };

  return (
    <FoodJournalContext.Provider
      value={{
        updateFoodJournal,
        changeEntry,
        completeFoodJournal,
        foodJournal,
        foodJournals,
        meal,
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
