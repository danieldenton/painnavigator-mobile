import React, { createContext, useState, useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
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
  const lastFoodJournal = formatDate(foodJournals[0]?.date_time_value);
  const foodJournalToday = lastFoodJournal === timeZonedTodaysDate;


  // async function postFoodJournal(journalEntry) {
  //   try {
  //     const response = await axios.post(`${API_URL}/api/v1/food_journals`, {
  //       food_journal: journalEntry,
  //       uid: uid,
  //     });
  //     const data = response.data.data.attributes;
  //     setFoodJournals((prevJournals) => [data, ...prevJournals]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function patchFoodJournal(journalId, journalEntry) {
  //   try {
  //     const response = await axios.patch(
  //       `${API_URL}/api/v1/food_journals/${journalId}`,
  //       { food_journal: journalEntry }
  //     );
  //     const data = response.data.data.attributes;
  //     setFoodJournals((prevJournals) =>
  //       prevJournals.map((journal) =>
  //         journal.id === journalId ? data : journal
  //       )
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const updateFoodJournal = (journalId) => {
    const mealEntry = {
      [meal.toLowerCase()]: JSON.stringify(foodJournal),
    };
    patchFoodJournal(journalId, mealEntry);
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
