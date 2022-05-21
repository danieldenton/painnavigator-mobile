import React from "react";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalEntryIcon, Profile, SmartGoalDailyActivity } from "../../../icons";

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

export const NewSmartGoal = ({ navigation }) => {
    return (
        <DailyActivitiesTile 
            navigation={navigation} 
            destination={"SmartGoals"} 
            screen={"NewSmartGoal"}
            screenParams={"DailyActivity"}
            title={"Create a Smart Goal"}
            icon={<SmartGoalDailyActivity />}
        />
    );
};

export const ProfileSetup = ({ navigation }) => {
    return (
        <DailyActivitiesTile 
            navigation={navigation}
            // TODO: replace destination with ProfileSetup once feature is added
            destination={"Journals"}
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