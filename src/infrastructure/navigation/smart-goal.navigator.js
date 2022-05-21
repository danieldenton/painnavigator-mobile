import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NewSmartGoalScreen } from "../../features/smart-goals/screens/new-smart-goal.screen";
import { NewSmartGoalUpdateScreen } from "../../features/smart-goals/screens/new-smart-goal-update.screen";
import { ReviewSmartGoalScreen } from "../../features/smart-goals/screens/review-smart-goal.screen";
import { SmartGoalHomeScreen } from "../../features/smart-goals/screens/smart-goal-home.screen";
import { SmartGoalCreatedScreen } from "../../features/smart-goals/screens/smart-goal-created.screen";
import { SmartGoalUpdateCreatedScreen } from "../../features/smart-goals/screens/smart-goal-update-created.screen";
import { SmartGoalDeletedScreen } from "../../features/smart-goals/screens/smart-goal-deleted.screen";

const SmartGoalStack = createStackNavigator();

export const SmartGoalNavigator = () => {
    return (
        <SmartGoalStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <SmartGoalStack.Screen name="SmartGoalHome" component={SmartGoalHomeScreen} />
            <SmartGoalStack.Screen name="NewSmartGoal" component={NewSmartGoalScreen} />
            <SmartGoalStack.Screen name="ReviewSmartGoal" component={ReviewSmartGoalScreen} />
            <SmartGoalStack.Screen name="NewSmartGoalUpdate" component={NewSmartGoalUpdateScreen} />
            <SmartGoalStack.Screen name="SmartGoalCreated" component={SmartGoalCreatedScreen} />
            <SmartGoalStack.Screen name="SmartGoalUpdateCreated" component={SmartGoalUpdateCreatedScreen} />
            <SmartGoalStack.Screen name="SmartGoalDeleted" component={SmartGoalDeletedScreen} />
        </SmartGoalStack.Navigator>
    );
};