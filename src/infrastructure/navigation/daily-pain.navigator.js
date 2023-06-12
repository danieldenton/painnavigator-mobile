import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DailyPainScoreScreen } from "../../features/daily-pain/screens/daily-pain-score.screen";

const DailyPainStack = createStackNavigator();

export const DailyPainNavigator = () => {
    return (
        <DailyPainStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <DailyPainStack.Screen name="DailyPainScoreScreen" component={DailyPainScoreScreen} />
        </DailyPainStack.Navigator>
    );
};