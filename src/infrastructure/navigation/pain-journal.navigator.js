import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { PainJournalHomeScreen } from "../../features/pain-journal/screens/pain-journal-home.screen";
import { NewPainJournalScreen } from "../../features/pain-journal/screens/new-pain-journal.screen";
import { ReviewPainJournalScreen } from "../../features/pain-journal/screens/review-pain-journal.screen";

const PainJournalStack = createStackNavigator();

export const PainJournalNavigator = () => {

    return (
        <PainJournalStack.Navigator>
            <PainJournalStack.Screen 
                name="PainJournalHome" 
                component={PainJournalHomeScreen} 
            />
            <PainJournalStack.Screen 
                name="NewPainJournal" 
                component={NewPainJournalScreen} 
                options={{ headerShown: false }}
            />
            <PainJournalStack.Screen 
                name="ReviewPainJournal" 
                component={ReviewPainJournalScreen} 
                options={{ headerShown: false }}
            />
        </PainJournalStack.Navigator>
    );
};