import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { MovementPlaylistScreen } from "../../features/movement/screens/movement-playlist.screen";
import { MovementUnitScreen } from "../../features/movement/screens/movement-unit.screen";

const MovementStack = createStackNavigator();

export const MovementNavigator = () => {

    return (
        <MovementStack.Navigator>
            <MovementStack.Screen 
                name="MovementPlaylist" 
                component={MovementPlaylistScreen} 
                options={{ headerShown: false }}
            />
            <MovementStack.Screen 
                name="MovementUnit" 
                component={MovementUnitScreen}
                options={{ headerShown: false }}
            />
        </MovementStack.Navigator>
    );
};