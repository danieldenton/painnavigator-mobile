import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CompletionScreen } from "../../features/education/screens/completion.screen";
import { EducationUnitScreen } from "../../features/education/screens/education-unit.screen";
import { SkippedScreen } from "../../features/education/screens/skipped.screen";
import { Why } from "../../features/post-video-actions/screens/why.screen";
import { PainJournalHomeScreen } from "../../features/pain-journal/screens/pain-journal-home.screen";
import { NewPainJournalScreen } from "../../features/pain-journal/screens/new-pain-journal.screen";
import { ReviewPainJournalScreen } from "../../features/pain-journal/screens/review-pain-journal.screen";
import { NewSmartGoalScreen } from "../../features/smart-goals/screens/new-smart-goal.screen"; 
import { NewMoodJournalScreen } from "../../features/mood-journal/screens/new-mood-journal.screen";
import { SmartGoalCreatedScreen } from "../../features/smart-goals/screens/smart-goal-created.screen";
import { NewFavoriteActivitiesScreen } from "../../features/favorite-activities/screens/new-favorite-activities.screen";
import { FavoriteActivitiesCompletedScreen } from "../../features/favorite-activities/screens/favorite-activities-completed.screen";
import { FavoriteActivitiesHomeScreen } from "../../features/favorite-activities/screens/favorite-activities-home.screen";
import { FoodJournalHomeScreen } from "../../features/food-journal/screens/food-journal-home.screen";
import { FoodJournalEntryScreen } from "../../features/food-journal/screens/food-journal-entry.screen";
import { ReviewFoodJournalScreen } from "../../features/food-journal/screens/review-food-journal.screen";

const EducationStack = createStackNavigator();

export const EducationNavigator = () => {

    const educationData = [
        {
           "name": "EducationUnit",
           "component": EducationUnitScreen
        },
        {
            "name": "Completion",
            "component": CompletionScreen
        },
        {
            "name": "Skipped",
            "component": SkippedScreen
        },
        {
            "name": "Why",
            "component": Why
            
        },
        {
            "name": "PainJournalHome",
            "component": PainJournalHomeScreen,
            "initialParams": { postVideoAction: true }
        },
        {
            "name": "PainJournal",
            "component": NewPainJournalScreen
        },
        {
            "name": "NewPainJournal",
            "component": NewPainJournalScreen
        },
        {
            "name": "ReviewPainJournal",
            "component": ReviewPainJournalScreen
        },
        {
            "name": "SmartGoal",
            "component": NewSmartGoalScreen
        },
        {
             "name": "SmartGoalCreated",
             "component": SmartGoalCreatedScreen
        },
        {
             "name": "MoodJournal",
             "component": NewMoodJournalScreen
        },
        {
             "name": "FavoriteActivities",
             "component": NewFavoriteActivitiesScreen
        },
        {
             "name": "FavoriteActivitiesCompleted",
             "component": FavoriteActivitiesCompletedScreen
        },
        {
             "name": "FavoriteActivitiesHome",
             "component": FavoriteActivitiesHomeScreen
        },
        {
            "name": "FoodJournal",
            "component": FoodJournalHomeScreen,
            "initialParams": { postVideoAction: true }
        },
        {
            "name": "FoodJournalHome",
            "component": FoodJournalHomeScreen,
            "initialParams": { postVideoAction: true }
        },
        {
            "name": "FoodJournalEntry",
            "component": FoodJournalEntryScreen
        },
        {
            "name": "ReviewFoodJournal",
            "component": ReviewFoodJournalScreen
        }
    ];

    const educationScreens = educationData.map((screen) => {
        const { name, component } = screen;
        return (
            <EducationStack.Screen
                name={name}
                component={component}
                key={name}
                initialParams={screen.initialParams && screen.initialParams}
            />
        );
    });

    return (
        <EducationStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            {educationScreens}
        </EducationStack.Navigator>
    );
};