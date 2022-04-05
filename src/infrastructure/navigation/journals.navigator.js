import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { JournalScreen } from "../../features/today/screens/journals.screen";

import { PainJournalScreen } from "../../features/painJournal/screens/pain-journal.screen";
import { NewPainJournalScreen } from "../../features/painJournal/screens/new-pain-journal.screen";
import { ReviewPainJournal } from "../../features/painJournal/screens/review-pain-journal.screen";

import { FoodJournalHomeScreen } from "../../features/food-journal/screens/food-journal-home.screen";
import { FoodJournalEntryScreen } from "../../features/food-journal/screens/food-journal-entry.screen";
import { ReviewFoodJournalScreen } from "../../features/food-journal/screens/review-food-journal.screen";

const JournalsStack = createStackNavigator();

export const JournalsNavigator = () => {

    return (
        <JournalsStack.Navigator>
            <JournalsStack.Screen 
                name="Journals" 
                component={JournalScreen}
            />
            <JournalsStack.Screen 
                name="PainJournal" 
                component={PainJournalScreen} 
            />
            <JournalsStack.Screen
                name="NewPainJournal"
                component={NewPainJournalScreen}
                options={{ headerShown: false }}
            />
            <JournalsStack.Screen
                name="ReviewPainJournal"
                component={ReviewPainJournal}
                options={{ headerShown: false }}
            />
            <JournalsStack.Screen 
                name="FoodJournalHome" 
                component={FoodJournalHomeScreen} 
            />
            <JournalsStack.Screen 
                name="FoodJournalEntry" 
                component={FoodJournalEntryScreen} 
                options={{ headerShown: false }}
            />
            <JournalsStack.Screen 
                name="ReviewFoodJournal" 
                component={ReviewFoodJournalScreen} 
            />
        </JournalsStack.Navigator>
    );
};