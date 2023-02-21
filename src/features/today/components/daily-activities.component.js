import React from "react";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalEntryIcon, Profile, SmartGoalDailyActivity, WellnessCoachIcon } from "../../../icons";
import { SMART_GOAL_EVENTS } from "../../../amplitude-events";

export const Journals = ({ navigation }) => {
    return (
        <DailyActivitiesTile 
            navigation={navigation} 
            destination={"JournalsNavigator"} 
            title={"Make a Journal Entry"}
            icon={<JournalEntryIcon />}
        />
    );
};

export const WellnessCoach = ({ navigation }) => {
    return (
        <DailyActivitiesTile 
            navigation={navigation} 
            destination={"WellnessCoach"} 
            title={"Check in with your Coach"}
            icon={<WellnessCoachIcon />}
        />
    );
};

export const NewSmartGoal = ({ navigation }) => {
    return (
        <DailyActivitiesTile 
            navigation={navigation} 
            destination={"SmartGoals"} 
            screen={"NewSmartGoal"}
            screenParams={"DailyActivity"}
            title={"Create a Smart Goal"}
            icon={<SmartGoalDailyActivity />}
            trackEvent={SMART_GOAL_EVENTS.START_NEW_SMART_GOAL}
        />
    );
};

export const ProfileSetup = ({ navigation }) => {
    return (
        <DailyActivitiesTile 
            navigation={navigation}
            destination={"Profile"}
            title={"Finish Setting Up Profile"}
            icon={<Profile />}
        />
    );
};

export const SmartGoalUpdate = ({ navigation }) => {
    return (
        <DailyActivitiesTile 
            navigation={navigation} 
            destination={"SmartGoals"} 
            screen={"NewSmartGoalUpdate"}
            screenParams={"DailyActivity"}
            title={"Update Smart Goal"}
            icon={<SmartGoalDailyActivity />}
        />
    );
};