import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { JournalScreen } from "../../features/today/screens/journals.screen";
import { PainJournalScreen } from "../../features/painJournal/screens/pain-journal.screen";
import { NewPainJournalScreen } from "../../features/painJournal/screens/new-pain-journal.screen";
import { ReviewPainJournal } from "../../features/painJournal/screens/review-pain-journal.screen";

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
                options={{
                    headerShown: false,
                }}
            />
            <JournalsStack.Screen
                name="ReviewPainJournal"
                component={ReviewPainJournal}
                options={{
                    headerShown: false,
                    //presentation: `modal`
                }}
            />
        </JournalsStack.Navigator>
    );
};