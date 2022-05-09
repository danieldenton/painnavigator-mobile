import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UnitsScreen } from "../../features/units/screens/units.screen";
import { EducationUnitsScreen } from "../../features/units/screens/education-units.screen";
import { MovementUnitsScreen } from "../../features/units/screens/movement-units.screen";
import { ReplayUnitScreen } from "../../features/units/screens/replay-unit.screen";

const UnitsStack = createStackNavigator();

export const UnitsNavigator = () => {
    return (
        <UnitsStack.Navigator screenOptions={{ gestureEnabled: false }}>
            <UnitsStack.Screen 
                name="Units" 
                component={UnitsScreen} 
                options={{ headerShown: false }}
            />
            <UnitsStack.Screen 
                name="EducationUnits" 
                component={EducationUnitsScreen}
                options={{ headerShown: false, swipeEdgeWidth: 0 }}
            />
            <UnitsStack.Screen 
                name="MovementUnits" 
                component={MovementUnitsScreen}
                options={{ headerShown: false }}
            />
            <UnitsStack.Screen 
                name="ReplayUnit" 
                component={ReplayUnitScreen} 
                options={{ headerShown: false }}
            />
        </UnitsStack.Navigator>
    );
};