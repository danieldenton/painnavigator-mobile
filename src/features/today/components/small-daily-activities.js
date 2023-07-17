import React from "react";
import { SmallDailyActivitiesTile } from "../../../components/small-daily-activities-tile";
import { JournalEntryIcon, WellnessCoachIcon, SmartGoalDailyActivity, Profile } from "../../../icons";
import { SMART_GOAL_EVENTS } from "../../../amplitude-events";
import { MESSAGE_EVENTS } from "../../../amplitude-events";

export const Journals = ({ navigation }) => {
    return (
        <SmallDailyActivitiesTile
            navigation={navigation} 
            destination={"JournalsNavigator"} 
            title={"Make a Journal Entry"}
            icon={<JournalEntryIcon />}
        />
    );
};

export const WellnessCoach = ({ navigation }) => {
    return (
        <SmallDailyActivitiesTile 
            navigation={navigation} 
            destination={"WellnessCoach"} 
            title={"Check in with your Coach"}
            icon={<WellnessCoachIcon />}
            trackEvent={MESSAGE_EVENTS.VIEW_MESSAGE_FROM_WELLNESS_COACH}
        />
    );
};

export const NewSmartGoal = ({ navigation }) => {
    return (
        <SmallDailyActivitiesTile 
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
        <SmallDailyActivitiesTile 
            navigation={navigation}
            destination={"Profile"}
            title={"Finish Setting Up Profile"}
            icon={<Profile />}
        />
    );
};

export const SmartGoalUpdate = ({ navigation }) => {
    return (
        <SmallDailyActivitiesTile 
            navigation={navigation} 
            destination={"SmartGoals"} 
            screen={"NewSmartGoalUpdate"}
            screenParams={"DailyActivity"}
            title={"Update Smart Goal"}
            icon={<SmartGoalDailyActivity />}
        />
    );
};