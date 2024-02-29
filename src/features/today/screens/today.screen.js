import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Audio } from "expo-av";
import { Provider } from "react-native-paper";
import { Greeting } from "../components/greeting.component";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { DailyGoalCompleted } from "../components/daily-goal-completed.component";
import { AuthenticationContext } from "../../../services/authentication.context";
import { OnboardContext } from "../../../services/onboard.context";
import { DailyPainContext } from "../../../services/daily-pain.context";
import { ProfileContext } from "../../../services/profile/profile-context";
import { MovementContext } from "../../../services/movement/movement.context";
import { WellnessCoachContext } from "../../../services/wellness-coach.context";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { getPainJournals } from "../../../services/pain-journal/pain-journal.service";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { getMoodJournals } from "../../../services/mood-journal/mood-journal.service";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { getFoodJournals } from "../../../services/food-journal/food-journal.service";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { SubHeader } from "../../../components/typography.component";
import { TodayNavBar } from "../../../components/journals/navigation-bar.component";
import { DailyPainScore } from "../components/daily-activities.component";
import { DashboardTour } from "../../dashboard-tour/dashboard-tour";
import { WellnessCoachReminder } from "../components/wellness-coach-reminder.component";
import {
  Journals,
  WellnessCoach,
  NewSmartGoal,
  ProfileSetup,
  SmartGoalUpdate,
} from "../components/small-daily-activities";
import {
  formatDate,
  timeZonedTodaysDate,
  formatBackendCreatedAtDate,
} from "../../../utils";

export const TodayScreen = ({ navigation }) => {
  const { uid, getUser } = useContext(AuthenticationContext);
  const { tour } = useContext(OnboardContext);
  const { getDailyPainScores, painScoreToday } = useContext(DailyPainContext);
  const { userInfo, profileComplete } = useContext(ProfileContext);
  const { getSmartGoals, activeGoal } = useContext(SmartGoalContext);
  const { painJournals, setPainJournals } = useContext(PainJournalContext);
  const { moodJournals, setMoodJournals } = useContext(MoodJournalContext);
  const { foodJournals, setFoodJournals } = useContext(FoodJournalContext);
  const { movementModulesOnScreen } = useContext(MovementContext);
  const {
    getEducationModuleCompletions,
    educationProgress,
    educationProgram,
    completedAllEducationModules,
    lastEducationModuleId,
    lastCompletedEducationModuleDate
  } = useContext(EducationContext);
  const { getMessages, hasUnreadMessages, messages } =
    useContext(WellnessCoachContext);

  const lastPainJournal = formatDate(painJournals[0]?.date_time_value);
  const lastMoodJournal = formatDate(moodJournals[0]?.date_time_value);
  const lastFoodJournal = formatDate(foodJournals[0]?.date_time_value);
  const lastSmartGoalUpdate = formatDate(
    activeGoal?.goal_updates[0]?.date_time_value
  );
  
  const isFocused = useIsFocused();

  useEffect(() => {
    getUser();
    getDailyPainScores(uid);
    getSmartGoals();
    getPainJournals(uid, setPainJournals);
    getMoodJournals(uid, setMoodJournals);
    getFoodJournals(uid, setFoodJournals);
    getEducationModuleCompletions(uid);
  }, []);

  useEffect(() => {
    getMessages(uid);
  }, [messages]);

  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  function renderJournalDailyActivity() {
    const userCompletedPainJournallUnit =
      educationProgram === 2 ? educationProgress > 2 : educationProgress > 4;
    if (
      userCompletedPainJournallUnit &&
      lastFoodJournal !== timeZonedTodaysDate &&
      lastMoodJournal !== timeZonedTodaysDate &&
      lastPainJournal !== timeZonedTodaysDate
    ) {
      return <Journals navigation={navigation} />;
    }
  }

  function renderSmartGoalDailyActivity() {
    const userCompletedSmartGoalUnit =
      educationProgram === 2 ? educationProgress > 5 : educationProgress > 7;
    if (userCompletedSmartGoalUnit && activeGoal) {
      if (lastSmartGoalUpdate === timeZonedTodaysDate) {
        return <DailyGoalCompleted type={"Smart Goal Update"} />;
      } else {
        return <SmartGoalUpdate navigation={navigation} />;
      }
    } else if (educationProgress > 7) {
      return <NewSmartGoal navigation={navigation} />;
    } else {
      return null;
    }
  }

  return (
    <Provider>
      <SafeView>
        <TodayNavBar
          navigation={navigation}
          hasUnreadMessages={hasUnreadMessages}
        />
        <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
          <Greeting name={userInfo.first_name} isFocused={isFocused} />
          <SubHeader title={"TODAY'S PAIN SCORE"} size={14} />
          {painScoreToday ? (
            <DailyGoalCompleted type={"Daily Pain Score"} />
          ) : (
            <DailyPainScore navigation={navigation} />
          )}
          {!completedAllEducationModules ? (
            <SubHeader title={"TODAY'S EDUCATION"} size={14} />
          ) : null}
          {lastCompletedEducationModuleDate === timeZonedTodaysDate && (
            <DailyGoalCompleted
              type={"module"}
              moduleId={lastEducationModuleId}
            />
          )}
          {!completedAllEducationModules ? (
            <EducationUnitCard navigation={navigation} />
          ) : null}

          {movementModulesOnScreen ? (
            <>
              <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
              <MovementUnitCard navigation={navigation} isFocused={isFocused} />
            </>
          ) : null}
          <SubHeader title={"DAILY ACTIVITIES"} size={14} />
          <View style={{ marginBottom: 16 }}>
            {hasUnreadMessages ? (
              <WellnessCoach navigation={navigation} />
            ) : null}
            {!profileComplete && <ProfileSetup navigation={navigation} />}
            {renderJournalDailyActivity()}
            {renderSmartGoalDailyActivity()}
            {lastPainJournal === timeZonedTodaysDate ? (
              <DailyGoalCompleted type={"Pain Journal"} />
            ) : null}
            {lastMoodJournal === timeZonedTodaysDate ? (
              <DailyGoalCompleted type={"Mood Journal"} />
            ) : null}
            {lastFoodJournal === timeZonedTodaysDate ? (
              <DailyGoalCompleted type={"Food Journal"} />
            ) : null}
          </View>
        </Scroll>
        <DashboardTour tour={tour} />
        <WellnessCoachReminder navigation={navigation} />
      </SafeView>
    </Provider>
  );
};
