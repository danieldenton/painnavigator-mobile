import React, { useContext } from "react";
import { View } from "react-native";
import {
  Journals,
  WellnessCoach,
  ProfileSetup,
} from "../components/small-daily-activities";
import { SmartGoalActivity } from "../components/smart-goal-activity.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { EducationContext } from "../../../services/education/education.context";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { WellnessCoachContext } from "../../../services/wellness/wellness-coach.context";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SubHeader } from "../../../components/typography.component";
import { DailyGoalCompleted } from "./daily-goal-completed.component";

export const DailyActivities = ({
  navigation,
  journaledToday,
  activeSmartGoal,
  smartGoalUpdatedToday,
}) => {
  const { painJournalToday } = useContext(PainJournalContext);
  const { educationProgram, educationProgress } = useContext(EducationContext);
  const { foodJournalToday } = useContext(FoodJournalContext);
  const { moodJournalToday } = useContext(MoodJournalContext);
  const { hasUnreadMessages } = useContext(WellnessCoachContext);
  const { userInfo } = useContext(ProfileContext);
  const userCompletedPainJournalUnit =
    educationProgram === 2 ? educationProgress > 2 : educationProgress > 4;
  const _journaledToday =
    foodJournalToday || moodJournalToday || painJournalToday;
  const showJournalTile =
    userCompletedPainJournalUnit && !_journaledToday && !journaledToday;
  const userCompletedSmartGoalUnit =
    educationProgram === 2 ? educationProgress > 5 : educationProgress > 7;

  return (
    <View style={{ marginBottom: 16 }}>
      <SubHeader title={"DAILY ACTIVITIES"} size={14} />
      {hasUnreadMessages ? <WellnessCoach navigation={navigation} /> : null}
      {/* check below to see if falsey */}
      {userInfo.profile_status === 0 ? <ProfileSetup navigation={navigation} /> : null}
      {showJournalTile ? <Journals navigation={navigation} /> : null}
      {userCompletedSmartGoalUnit ? (
        <SmartGoalActivity
          navigation={navigation}
          userCompletedSmartGoalUnit={userCompletedSmartGoalUnit}
          smartGoalUpdatedToday={smartGoalUpdatedToday}
          activeSmartGoal={activeSmartGoal}
        />
      ) : null}
      {painJournalToday ? <DailyGoalCompleted type={"Pain Journal"} /> : null}
      {moodJournalToday ? <DailyGoalCompleted type={"Mood Journal"} /> : null}
      {foodJournalToday ? <DailyGoalCompleted type={"Food Journal"} /> : null}
    </View>
  );
};
