import { NavigationContainer, createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { TodayScreen } from "../../features/educationModules/screens/today.screen";
import { EducationUnitScreen } from "../../features/educationModules/screens/education-unit.screen";

const EducationModulesStack = createStackNavigator();

export const EducationModulesNavigator = () => {
    return (
        <EducationModulesStack.Navigator>
            <EducationModulesStack.Screen
                name="EducationUnit"
                component={EducationUnitScreen}
                options={{ headerShown: false }}
            />
        </EducationModulesStack.Navigator>
    );
};
