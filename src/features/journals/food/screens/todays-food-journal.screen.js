import React from "react";
import { SafeArea } from "../../../../components/safe-area.component";
import { NewFoodJournalEntry } from "../components/new-food-journal-entry.component";

export const TodaysFoodJournalScreen = ({ navigation }) => {
    const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];

    const foodJournalEntryOptions = meals.map((meal, index) => 
        <NewFoodJournalEntry key={index} meal={meal} destination={"NewFoodJournal"} navigation={navigation} />
    );

    return(
        <SafeArea>
            {foodJournalEntryOptions}
        </SafeArea>
    );
};