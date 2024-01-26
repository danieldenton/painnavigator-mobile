import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NewProfileScreen } from "../../features/profile/screens/new-profile.screen";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => {

    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <ProfileStack.Screen 
                name="NewProfile" 
                component={NewProfileScreen} 
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    );
};