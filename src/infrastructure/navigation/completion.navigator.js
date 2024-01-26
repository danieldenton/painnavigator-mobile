import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OutcomeScreen } from "../../features/completion/screens/outcome.screen";
import { ProgramCompletedScreen } from "../../features/completion/screens/program-completed.screen";


const CompletionStack = createStackNavigator();

export const CompletiontNavigator = () => {
    return (
        <CompletionStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <CompletionStack.Screen name="Outcome" component={OutcomeScreen} />
            <CompletionStack.Screen name="ProgramCompleted" component={ProgramCompletedScreen} />
        </CompletionStack.Navigator>
    )
};