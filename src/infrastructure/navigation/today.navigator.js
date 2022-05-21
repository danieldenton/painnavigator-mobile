import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TodayScreen } from "../../features/today/screens/today.screen";
import { MyProgress } from "../../features/progress/screens/my-progress.screen";
import { UnitsNavigator } from "./units.navigator";
import { EducationNavigator } from "./education.navigator";
import { MovementNavigator } from "./movement.navigator";
import { JournalsNavigator } from "./journals.navigator";
import { SmartGoalNavigator } from "./smart-goal.navigator";

const TodayStack = createStackNavigator();

export const TodayNavigator = () => {
    return (
        <TodayStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <TodayStack.Screen name="Today" component={TodayScreen} />
            <TodayStack.Screen name="Units" component={UnitsNavigator} />
            <TodayStack.Screen name="Education" component={EducationNavigator} />
            <TodayStack.Screen name="Movement" component={MovementNavigator} />
            <TodayStack.Screen name="JournalsNavigator" component={JournalsNavigator} />
            <TodayStack.Screen name="Progress" component={MyProgress} />
            <TodayStack.Screen name="SmartGoals" component={SmartGoalNavigator} />
        </TodayStack.Navigator>
    );
};
