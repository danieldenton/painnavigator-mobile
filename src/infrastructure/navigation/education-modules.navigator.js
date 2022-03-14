import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import { TodayScreen } from "../../features/today/screens/today.screen";
import { EducationUnitScreen } from "../../features/educationModules/screens/education-unit.screen";
import { MovementNavigator } from "../navigation/movement.navigator";
import { JournalsNavigator } from "./journals.navigator";

import { JournalsNavigator } from "./journals.navigator";
const EducationModulesStack = createStackNavigator();

export const EducationModulesNavigator = () => {
    return (
        <NavigationContainer>
            <EducationModulesStack.Navigator screenOptions={{headerShown: false}}>
                <EducationModulesStack.Screen name="Today" component={TodayScreen} />
                <EducationModulesStack.Screen name="EducationUnit" component={EducationUnitScreen} />
                <EducationModulesStack.Screen name="Movement" component={MovementNavigator} />
                <EducationModulesStack.Screen name="JournalsNavigator" component={JournalsNavigator} />
            </EducationModulesStack.Navigator>
        </NavigationContainer>
    );
};
