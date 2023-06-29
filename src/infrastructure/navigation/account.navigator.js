import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardScreen } from "../../features/account/screens/onboard.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import { Privacy } from "../../features/account/screens/privacy-policy.screen";
import { TermsOfUse } from "../../features/account/screens/terms-of-use.screen";
import { ProfileSetupScreen } from "../../features/account/screens/profile-setup.screen";
import { ProviderCodeScreen } from "../../features/account/screens/provider-code.screen";
import { ExplanationScreen } from "../../features/account/screens/explanation.screen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <AccountStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <AccountStack.Screen name="Onboard" component={OnboardScreen} />
            <AccountStack.Screen name="Explanation" component={ExplanationScreen}/>
            <AccountStack.Screen name="Provider" component={ProviderCodeScreen} />
            <AccountStack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
            <AccountStack.Screen name="Register" component={RegisterScreen} />
            <AccountStack.Group screenOptions={{ presentation: 'modal' }}>
                <AccountStack.Screen name="Privacy" component={Privacy} />
                <AccountStack.Screen name="Terms" component={TermsOfUse} />
            </AccountStack.Group>
            <AccountStack.Screen name="Login" component={LoginScreen} />
        </AccountStack.Navigator>
    )
};