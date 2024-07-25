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
import { SubHeader } from "../../../components/typography.component";
import { DailyGoalCompleted } from "./daily-goal-completed.component";

export const DailyActivities = ({
  navigation,
  profileComplete,
  journaledToday,
  activeSmartGoal,
  smartGoalUpdatedToday,
}) => {
  const { painJournalToday } = useContext(PainJournalContext);
  const { educationProgram, educationProgress } = useContext(EducationContext);
  const { foodJournalToday } = useContext(FoodJournalContext);
  const { moodJournalToday } = useContext(MoodJournalContext);
  const { hasUnreadMessages } = useContext(WellnessCoachContext);
  const userCompletedPainJournalUnit =
    educationProgram === 2 ? educationProgress > 2 : educationProgress > 4;
  const _journaledToday =
    foodJournalToday || moodJournalToday || painJournalToday;
  const userCompletedSmartGoalUnit =
    educationProgram === 2 ? educationProgress > 5 : educationProgress > 7;
  const showJournalTile =
    userCompletedPainJournalUnit && (!journaledToday || _journaledToday);

  return (
    <View style={{ marginBottom: 16 }}>
      <SubHeader title={"DAILY ACTIVITIES"} size={14} />
      {hasUnreadMessages ? <WellnessCoach navigation={navigation} /> : null}
      {!profileComplete ? <ProfileSetup navigation={navigation} /> : null}
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
