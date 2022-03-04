import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import { TodayScreen } from "../../features/educationModules/screens/today.screen";
import { EducationUnitScreen } from "../../features/educationModules/screens/education-unit.screen";

const EducationModulesStack = createStackNavigator();

export const EducationModulesNavigator = () => {
    return (
        <NavigationContainer>
            <EducationModulesStack.Navigator screenOptions={{headerShown: false}}>
                <EducationModulesStack.Screen name="Today" component={TodayScreen} />
                <EducationModulesStack.Screen name="EducationUnit" component={EducationUnitScreen} />
            </EducationModulesStack.Navigator>
        </NavigationContainer>
    );
};
