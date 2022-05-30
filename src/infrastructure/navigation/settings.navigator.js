import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <SettingsStack.Screen name="SettingsHome" component={SettingsScreen} />
        </SettingsStack.Navigator>
    );
};