import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { JournalScreen } from "../../features/today/screens/journals.screen";

import { PainJournalScreen } from "../../features/painJournal/screens/pain-journal.screen";
import { NewPainJournalScreen } from "../../features/painJournal/screens/new-pain-journal.screen";
import { ReviewPainJournal } from "../../features/painJournal/screens/review-pain-journal.screen";

import { FoodJournalScreen } from "../../features/journals/food/screens/food-journal.screen";
import { TodaysFoodJournalScreen } from "../../features/journals/food/screens/todays-food-journal.screen";
import { NewFoodJournalScreen } from "../../features/journals/food/screens/new-food-journal.screen";
import { AddMealScreen } from "../../features/journals/food/screens/add-meal.screen";
import { ReviewFoodJournalScreen } from "../../features/journals/food/screens/review-food-journal.screen";

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
                name="FoodJournal" 
                component={FoodJournalScreen} 
            />
            <JournalsStack.Screen 
                name="TodaysFoodJournal" 
                component={TodaysFoodJournalScreen} 
            />
            <JournalsStack.Screen 
                name="NewFoodJournal" 
                component={NewFoodJournalScreen} 
            />
            <JournalsStack.Screen 
                name="AddMeal" 
                component={AddMealScreen} 
            />
            <JournalsStack.Screen 
                name="ReviewFoodJournal" 
                component={ReviewFoodJournalScreen} 
            />
        </JournalsStack.Navigator>
    );
};