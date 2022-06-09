import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CompletionScreen } from "../../features/education/screens/completion.screen";
import { EducationUnitScreen } from "../../features/education/screens/education-unit.screen";
import { SkippedScreen } from "../../features/education/screens/skipped.screen";
import { Why } from "../../features/post-video-actions/screens/why.screen";
import { NewPainJournalScreen } from "../../features/pain-journal/screens/new-pain-journal.screen";
import { NewSmartGoalScreen } from "../../features/smart-goals/screens/new-smart-goal.screen"; 
import { NewMoodJournalScreen } from "../../features/mood-journal/screens/new-mood-journal.screen";
import { SmartGoalCreatedScreen } from "../../features/smart-goals/screens/smart-goal-created.screen";
import { NewFavoriteActivitiesScreen } from "../../features/favorite-activities/screens/new-favorite-activities.screen";
import { FavoriteActivitiesCompletedScreen } from "../../features/favorite-activities/screens/favorite-activities-completed.screen";
import { FavoriteActivitiesHomeScreen } from "../../features/favorite-activities/screens/favorite-activities-home.screen";

const EducationStack = createStackNavigator();

export const EducationNavigator = () => {

    return (
        <EducationStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <EducationStack.Screen 
                name="EducationUnit" 
                component={EducationUnitScreen} 
            />
            <EducationStack.Screen 
                name="Completion" 
                component={CompletionScreen}
            />
            <EducationStack.Screen 
                name="Skipped" 
                component={SkippedScreen}
            />
            <EducationStack.Screen 
                name="Why" 
                component={Why} 
            />
            <EducationStack.Screen 
                name="NewPainJournal" 
                component={NewPainJournalScreen} 
            />
            <EducationStack.Screen 
                name="NewSmartGoal" 
                component={NewSmartGoalScreen} 
            />
            <EducationStack.Screen 
                name="SmartGoalCreated" 
                component={SmartGoalCreatedScreen} 
            />
            <EducationStack.Screen 
                name="NewMoodJournal" 
                component={NewMoodJournalScreen} 
            />
            <EducationStack.Screen 
                name="NewFavoriteActivities" 
                component={NewFavoriteActivitiesScreen} 
            />
            <EducationStack.Screen 
                name="FavoriteActivitiesCompleted" 
                component={FavoriteActivitiesCompletedScreen} 
            />
            <EducationStack.Screen
                name="FavoriteActivitiesHome"
                component={FavoriteActivitiesHomeScreen}
            />
        </EducationStack.Navigator>
    );
};