import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FoodJournalHomeScreen } from "../../features/food-journal/screens/food-journal-home.screen";
import { FoodJournalEntryScreen } from "../../features/food-journal/screens/food-journal-entry.screen";
import { ReviewFoodJournalScreen } from "../../features/food-journal/screens/review-food-journal.screen";

const FoodJournalStack = createStackNavigator();

export const FoodJournalNavigator = () => {

    return (
        <FoodJournalStack.Navigator>
            <FoodJournalStack.Screen 
                name="FoodJournalHome" 
                component={FoodJournalHomeScreen} 
                options={{ headerShown: false }}
            />
            <FoodJournalStack.Screen 
                name="FoodJournalEntry" 
                component={FoodJournalEntryScreen} 
                options={{ headerShown: false }}
            />
            <FoodJournalStack.Screen 
                name="ReviewFoodJournal" 
                component={ReviewFoodJournalScreen} 
                options={{ headerShown: false }}
            />
        </FoodJournalStack.Navigator>
    );
};
