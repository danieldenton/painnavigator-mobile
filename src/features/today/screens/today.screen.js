import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Audio } from "expo-av";
import { Provider } from "react-native-paper";
import { Greeting } from "../components/greeting.component";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { SmartGoalActivity } from "../components/smart-goal-activity.component";
import { DailyGoalCompleted } from "../components/daily-goal-completed.component";
import { AuthenticationContext } from "../../../services/authentication.context";
import { OnboardContext } from "../../../services/onboard.context";
import { DailyPainContext } from "../../../services/daily-pain.context";
import { ProfileContext } from "../../../services/profile/profile-context";
import { MovementContext } from "../../../services/movement/movement.context";
import { WellnessCoachContext } from "../../../services/wellness-coach.context";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { MoodJournalContext } from "../../../services/mood-journal.context";
import { FoodJournalContext } from "../../../services/food-journal.context";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { SubHeader } from "../../../components/typography.component";
import { TodayNavBar } from "../../../components/journals/navigation-bar.component";
import { DailyPainScore } from "../components/daily-pain-scores.component";
import { DashboardTour } from "../../dashboard-tour/dashboard-tour";
import { WellnessCoachReminder } from "../components/wellness-coach-reminder.component";
import { AppUpdateRequired } from "../components/app-update-required.component";
import {
  Journals,
  WellnessCoach,
  ProfileSetup,
} from "../components/small-daily-activities";
import { timeZonedTodaysDate } from "../../../utils";

export const TodayScreen = ({ navigation }) => {
  const { uid, getUser, lastDateOnApp, patchLastDateOnApp } = useContext(
    AuthenticationContext
  );
  const { tour } = useContext(OnboardContext);
  const { painScoreToday, getDailyPainScores } = useContext(DailyPainContext);
  const { userInfo, profileComplete } = useContext(ProfileContext);

  const { painJournalToday, getPainJournals } = useContext(PainJournalContext);
  const { moodJournalToday, getMoodJournals } = useContext(MoodJournalContext);
  const { foodJournalToday, getFoodJournals } = useContext(FoodJournalContext);
  const {
    movementModulesComplete,
    getMovementModuleCompletions,
    lastModuleCompleted,
    moduleComplete,
    movementProgram,
  } = useContext(MovementContext);
  const {
    getEducationModuleCompletions,
    educationProgress,
    educationProgram,
    completedAllEducationModules,
    lastEducationModuleId,
    lastCompletedEducationModuleDate,
  } = useContext(EducationContext);
  const { getMessages, hasUnreadMessages } = useContext(WellnessCoachContext);

  const isFocused = useIsFocused();
  const userCompletedPainJournallUnit =
    educationProgram === 2 ? educationProgress > 2 : educationProgress > 4;
  const journaledToday =
    userCompletedPainJournallUnit &&
    foodJournalToday &&
    moodJournalToday &&
    painJournalToday;
  const userCompletedSmartGoalUnit =
    educationProgram === 2 ? educationProgress > 5 : educationProgress > 7;

  useEffect(() => {
    getUser();
    getDailyPainScores(uid);
    getEducationModuleCompletions(uid);
    getFoodJournals();
    getMoodJournals();
    getPainJournals();
  }, []);

  useEffect(() => {
    getMovementModuleCompletions(uid);
  }, [movementProgram]);

  useEffect(() => {
    getMessages(uid);
  }, [isFocused]);

  useEffect(() => {
    if (lastDateOnApp !== timeZonedTodaysDate) {
      patchLastDateOnApp();
    }
  }, [lastDateOnApp]);

  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

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
          {movementModulesComplete ? (
            <>
              <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
              {lastModuleCompleted.dateCompleted === timeZonedTodaysDate ||
              moduleComplete ? (
                <DailyGoalCompleted
                  type={"movementModule"}
                  moduleId={lastModuleCompleted.moduleId}
                  movementProgram={movementProgram}
                />
              ) : (
                <MovementUnitCard
                  navigation={navigation}
                  isFocused={isFocused}
                />
              )}
            </>
          ) : null}
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
          <SubHeader title={"DAILY ACTIVITIES"} size={14} />
          <View style={{ marginBottom: 16 }}>
            {hasUnreadMessages ? (
              <WellnessCoach navigation={navigation} />
            ) : null}
            {!profileComplete && <ProfileSetup navigation={navigation} />}
            {journaledToday ? <Journals navigation={navigation} /> : null}
            {userCompletedSmartGoalUnit ? (
              <SmartGoalActivity navigation={navigation} />
            ) : null}
            {painJournalToday ? (
              <DailyGoalCompleted type={"Pain Journal"} />
            ) : null}
            {moodJournalToday ? (
              <DailyGoalCompleted type={"Mood Journal"} />
            ) : null}
            {foodJournalToday ? (
              <DailyGoalCompleted type={"Food Journal"} />
            ) : null}
          </View>
        </Scroll>
        <DashboardTour tour={tour} />
        <AppUpdateRequired />
        <WellnessCoachReminder navigation={navigation} />
      </SafeView>
    </Provider>
  );
};
