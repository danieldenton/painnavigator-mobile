import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MovementPlaylistScreen } from "../../features/movement/screens/movement-playlist.screen";
import { MovementUnitScreen } from "../../features/movement/screens/movement-unit.screen";
import { CompletionScreen } from "../../features/movement/screens/completion-screen";

const MovementStack = createStackNavigator();

export const MovementNavigator = () => {

    return (
        <MovementStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <MovementStack.Screen 
                name="MovementPlaylist" 
                component={MovementPlaylistScreen} 
            />
            <MovementStack.Screen 
                name="MovementUnit" 
                component={MovementUnitScreen}
            />
            <MovementStack.Screen 
                name="Completed" 
                component={CompletionScreen}
            />
        </MovementStack.Navigator>
    );
};