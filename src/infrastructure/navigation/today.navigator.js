import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TodayScreen } from "../../features/today/screens/today.screen";
import { EducationNavigator } from "./education.navigator";
import { MovementNavigator } from "./movement.navigator";
import { JournalsNavigator } from "./journals.navigator";

const TodayStack = createStackNavigator();

export const TodayNavigator = () => {
    return (
        <TodayStack.Navigator screenOptions={{headerShown: false}}>
            <TodayStack.Screen name="Today" component={TodayScreen} />
            <TodayStack.Screen name="Education" component={EducationNavigator} />
            <TodayStack.Screen name="Movement" component={MovementNavigator} />
            <TodayStack.Screen name="JournalsNavigator" component={JournalsNavigator} />
        </TodayStack.Navigator>
    );
};
