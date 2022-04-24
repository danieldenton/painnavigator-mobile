import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { JournalScreen } from "../../features/today/screens/journals.screen";
import { FoodJournalNavigator } from "./food-journal.navigator";
import { MoodJournalNavigator } from "./mood-journal.navigator";
import { PainJournalNavigator } from "./pain-journal.navigator";

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
                component={PainJournalNavigator}
                options={{ headerShown: false }}
            />
            <JournalsStack.Screen 
                name="FoodJournal" 
                component={FoodJournalNavigator} 
                options={{ headerShown: false }}
            />
            <JournalsStack.Screen 
                name="MoodJournal" 
                component={MoodJournalNavigator} 
                options={{ headerShown: false }}
            />
        </JournalsStack.Navigator>
    );
};