import React, { useContext } from "react";
import { SmallDailyActivitiesTile } from "../../../components/small-daily-activities-tile";
import {
  JournalEntryIcon,
  WellnessCoachIcon,
  SmartGoalDailyActivity,
  Profile,
} from "../../../icons";
import { EducationContext } from "../../../services/education/education.context";

export const Journals = ({ navigation }) => {
  const { additionalJournals } = useContext(EducationContext);

  return (
    <SmallDailyActivitiesTile
      navigation={navigation}
      destination={additionalJournals ? "JournalsNavigator" : "PainJournals"}
      title={
        additionalJournals
          ? "Create a Journal Entry"
          : "Create a Pain Journal Entry"
      }
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
