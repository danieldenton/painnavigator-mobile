import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { OnboardScreen } from "../../features/account/screens/onboard.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <AccountStack.Navigator screenOptions={{headerShown: false}}>
            <AccountStack.Screen name="Register" component={RegisterScreen} />
            <AccountStack.Screen name="Main" component={OnboardScreen} />
            <AccountStack.Screen name="Login" component={LoginScreen} />
        </AccountStack.Navigator>
    )
};