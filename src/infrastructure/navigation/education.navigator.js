import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CompletionScreen } from "../../features/education/screens/completion.screen";
import { EducationUnitScreen } from "../../features/education/screens/education-unit.screen";

const EducationStack = createStackNavigator();

export const EducationNavigator = () => {

    return (
        <EducationStack.Navigator>
            <EducationStack.Screen 
                name="EducationUnit" 
                component={EducationUnitScreen} 
                options={{ headerShown: false }}
            />
            <EducationStack.Screen 
                name="Completion" 
                component={CompletionScreen}
                options={{ headerShown: false }}
            />
        </EducationStack.Navigator>
    );
};