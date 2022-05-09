import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CompletionScreen } from "../../features/education/screens/completion.screen";
import { EducationUnitScreen } from "../../features/education/screens/education-unit.screen";
import { SkippedScreen } from "../../features/education/screens/skipped.screen";
import { NewPainJournalScreen } from "../../features/pain-journal/screens/new-pain-journal.screen"; 

const EducationStack = createStackNavigator();

export const EducationNavigator = () => {

    return (
        <EducationStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <EducationStack.Screen 
                name="EducationUnit" 
                component={EducationUnitScreen} 
                options={{ headerShown: false }}
            />
            <EducationStack.Screen 
                name="Completion" 
                component={CompletionScreen}
                options={{ headerShown: false }}
            />
            <EducationStack.Screen 
                name="Skipped" 
                component={SkippedScreen}
                options={{ headerShown: false }}
            />
            <EducationStack.Screen 
                name="NewPainJournal" 
                component={NewPainJournalScreen} 
                options={{ headerShown: false }}
            />
        </EducationStack.Navigator>
    );
};