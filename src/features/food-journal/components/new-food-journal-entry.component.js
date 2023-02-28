import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { NewJournalEntry } from "../../../components/journals/new-journal-entry.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { track } from "@amplitude/analytics-react-native";
import { FOOD_JOURNAL_EVENTS } from "../../../amplitude-events";

export const NewFoodJournalEntry = ({ meal, navigation, journalId }) => {
    const { setMeal } = useContext(FoodJournalContext);

    const handleViewMealTrack = () => {
        if (meal === "Breakfast") {
          track(FOOD_JOURNAL_EVENTS.VIEW_BREAKFAST);
        } else if (meal === "Lunch") {
          track(FOOD_JOURNAL_EVENTS.VIEW_LUNCH);
        } else if (meal === "Dinner") {
          track(FOOD_JOURNAL_EVENTS.VIEW_DINNER);
        } else if (meal === "Snacks") {
          track(FOOD_JOURNAL_EVENTS.VIEW_SNACKS);
        }
      };

    return (
        <TouchableOpacity 
            onPress={() => 
                {
                    navigation.navigate("FoodJournalEntry", { journalId: journalId ? journalId : null});
                    setMeal(meal);
                    handleViewMealTrack()
                }}
        >
            <NewJournalEntry title={meal}/>
        </TouchableOpacity>
    )
};