import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

const FavoriteActivitiesStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <FavoriteActivitiesStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <FavoriteActivitiesStack.Screen name="SettingsHome" component={SettingsScreen} />
        </FavoriteActivitiesStack.Navigator>
    );
};