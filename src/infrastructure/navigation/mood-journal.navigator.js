import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MoodJournalHomeScreen } from "../../features/mood-journal/screens/mood-journal-home.screen";
import { NewMoodJournalScreen } from "../../features/mood-journal/screens/new-mood-journal.screen";
import { ReviewMoodJournalScreen } from "../../features/mood-journal/screens/review-mood-journal.screen";

const MoodJournalStack = createStackNavigator();

export const MoodJournalNavigator = () => {

    return (
        <MoodJournalStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <MoodJournalStack.Screen 
                name="MoodJournalHome" 
                component={MoodJournalHomeScreen} 
                options={{ headerShown: false }}
            />
            <MoodJournalStack.Screen 
                name="NewMoodJournal" 
                component={NewMoodJournalScreen} 
                options={{ headerShown: false }}
            />
            <MoodJournalStack.Screen 
                name="ReviewMoodJournal" 
                component={ReviewMoodJournalScreen} 
                options={{ headerShown: false }}
            />
        </MoodJournalStack.Navigator>
    );
};