import React from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { ScrollView } from "react-native";
import { CompletedEntryCard } from "../components/completed-entry-card.component";
import { NewFoodJournalEntry } from "../components/new-food-journal-entry.component";

export const ReviewFoodJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;

    const meals = [
        { meal: "Breakfast", entry: journal ? journal.breakfast : "null", id: journal.id},
        { meal: "Lunch", entry: journal ? journal.lunch : "null", id: journal.id},
        { meal: "Dinner", entry: journal ? journal.dinner : "null", id: journal.id },
        { meal: "Snacks", entry: journal ? journal.snacks : "null", id: journal.id },
    ];

    const foodJournalEntryOptions = meals.map((meal, index) => 
        String(meal.entry) !== "null" ? ( 
            <CompletedEntryCard meal={meal} key={index} navigation={navigation} /> 
        ) : (
            <NewFoodJournalEntry meal={meal.meal} key={index} navigation={navigation} journalId={journal.id} />
        )
    );

    return (        
        <SafeArea>
            <ScrollView>
                {foodJournalEntryOptions}  
            </ScrollView>
        </SafeArea>
    );
};