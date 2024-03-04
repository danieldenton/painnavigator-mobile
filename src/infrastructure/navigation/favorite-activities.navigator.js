import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FavoriteActivitiesHomeScreen } from "../../features/favorite-activities/screens/favorite-activities-home.screen";
import { NewFavoriteActivitiesScreen } from "../../features/favorite-activities/screens/new-favorite-activities.screen";
import { FavoriteActivitiesCompletedScreen } from "../../features/favorite-activities/screens/favorite-activities-completed.screen";

const FavoriteActivitiesStack = createStackNavigator();

export const FavoriteActivitiesNavigator = () => {
    return (
        <FavoriteActivitiesStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <FavoriteActivitiesStack.Screen name="FavoriteActivitiesHome" component={FavoriteActivitiesHomeScreen} />
            <FavoriteActivitiesStack.Screen name="NewFavoriteActivities" component={NewFavoriteActivitiesScreen} />
            <FavoriteActivitiesStack.Screen name="FavoriteActivitiesCompleted" component={FavoriteActivitiesCompletedScreen} />
        </FavoriteActivitiesStack.Navigator>
    );
};