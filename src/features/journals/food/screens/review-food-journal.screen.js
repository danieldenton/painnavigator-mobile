import React from "react";
import { SafeArea } from "../../../../components/safe-area.component";
import { FoodJournalEntryCard } from "../components/food-journal-entry-card.componet";
import { NewFoodJournalEntry } from "../components/new-food-journal-entry.component";

export const ReviewFoodJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;

    const meals = [
        { meal: "Breakfast", entry: journal.breakfast },
        { meal: "Lunch", entry: journal.lunch },
        { meal: "Dinner", entry: journal.dinner },
        { meal: "Snacks", entry: journal.snacks },
    ];

    const foodJournalEntryOptions = meals.map((meal, index) => 
        String(meal.entry) !== "null" ? ( 
            <FoodJournalEntryCard meal={meal} key={index} /> 
        ) : (
            <NewFoodJournalEntry 
                meal={meal.meal} 
                key={index}
                navigation={navigation} 
                journalId={journal.id}
            />
        )
    );

    return (        
        <SafeArea>
            {foodJournalEntryOptions}
        </SafeArea>
    );
};