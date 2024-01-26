import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoriteActivitiesNavigator } from "./favorite-activities.navigator";
import { ProfileNavigator } from "./profile.navigator";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <SettingsStack.Screen name="ProfileHome" component={SettingsScreen} />
            <SettingsStack.Screen name="ProfileSetup" component={ProfileNavigator} />
            <SettingsStack.Screen name="FavoriteActivities" component={FavoriteActivitiesNavigator} />
        </SettingsStack.Navigator>
    );
};