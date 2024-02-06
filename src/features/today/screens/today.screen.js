import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Audio } from "expo-av";
import { useIsFocused } from "@react-navigation/native";
import { Provider } from "react-native-paper";
import { Greeting } from "../components/greeting.component";
import { EducationContext } from "../../../services/education/education.context";
import { educationPrograms } from "../../../services/education/education-programs-data.json";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { DailyGoalCompleted } from "../components/daily-goal-completed.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { ProfileContext } from "../../../services/profile/profile-context";
import { MovementContext } from "../../../services/movement/movement.context";
import { WellnessCoachContext } from "../../../services/wellness-coach/wellness-coach.context";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { getPainJournals } from "../../../services/pain-journal/pain-journal.service";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { getMoodJournals } from "../../../services/mood-journal/mood-journal.service";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { getFoodJournals } from "../../../services/food-journal/food-journal.service";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { getSmartGoals } from "../../../services/smart-goal/smart-goal.service";
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
  getUser,
  patchLastDateOnApp,
} from "../../../services/authentication/authentication.service";
import { getDailyPainScores } from "../../../services/daily-pain/daily-pain.service";
import {
  formatDate,
  todaysDate,
  timeZone,
  timeZonedTodaysDate,
  formatBackendCreatedAtDate,
} from "../../../utils";

export const TodayScreen = ({ navigation }) => {
  const {
    uid,
    setCompletedProgram,
    setEducationProgram,
    educationProgram,
    setLastDateOnApp,
    lastDateOnApp,
    tour,
    setTour,
    accessToWellnessCoach,
    setAccessToWellnessCoach,
  } = useContext(AuthenticationContext);
  const {
    setDailyPainScores,
    dailyPainScores,
    dailyPainScore,
    setDailyPainScore,
    setDailyPainStep,
  } = useContext(DailyPainContext);
  const { userInfo, profileComplete, setUserInfo, setProfileComplete } =
    useContext(ProfileContext);
  const { activeGoal, setActiveGoal, setFinishedGoals } =
    useContext(SmartGoalContext);
  const { painJournals, setPainJournals } = useContext(PainJournalContext);
  const { moodJournals, setMoodJournals } = useContext(MoodJournalContext);
  const { foodJournals, setFoodJournals } = useContext(FoodJournalContext);
  const { movementProgress, setMovementProgress } = useContext(MovementContext);
  const {
    getEducationModuleCompletions,
    educationProgress,
    educationModuleCompletionData,
    setEducationProgress,
  } = useContext(EducationContext);
  const { getMessages, hasUnreadMessages, messages } =
    useContext(WellnessCoachContext);
  const [greeting, setGreeting] = useState("");
  

  const isFocused = useIsFocused();
  const educationProgramLength =
    educationProgram < 10
      ? educationPrograms[educationProgram - 1].educationModulesId.length
      : null;
  const completedAllEducationModules =
    educationProgress > educationProgramLength;
  const completedAllMovementModules = movementProgress > 36;
  const noMovementModules = educationProgram > 9;
  const dailyPain = formatDate(
    dailyPainScores[dailyPainScores.length - 1]?.date_time_value
  );
  const lastPainJournal = formatDate(painJournals[0]?.date_time_value);
  const lastMoodJournal = formatDate(moodJournals[0]?.date_time_value);
  const lastFoodJournal = formatDate(foodJournals[0]?.date_time_value);
  const lastSmartGoalUpdate = formatDate(
    activeGoal?.goal_updates[0]?.date_time_value
  );
  const lastEducationModuleId = educationModuleCompletionData[0]?.module_id;
  const lastCompletedEducationModule = educationModuleCompletionData.find(
    (module) => module.status === "completed"
  );
  const lastCompletedEducationModuleDate = formatBackendCreatedAtDate(
    lastCompletedEducationModule?.created_at
  );

  useEffect(() => {
    getUser(
      uid,
      setUserInfo,
      setEducationProgram,
      setEducationProgress,
      setMovementProgress,
      setProfileComplete,
      setCompletedProgram,
      setLastDateOnApp,
      setAccessToWellnessCoach
    );
    getDailyPainScores(uid, setDailyPainScores);
    getSmartGoals(uid, setActiveGoal, setFinishedGoals);
    getPainJournals(uid, setPainJournals);
    getMoodJournals(uid, setMoodJournals);
    getFoodJournals(uid, setFoodJournals);
    getEducationModuleCompletions(uid);
  }, []);

  useEffect(() => {
    if (lastDateOnApp !== timeZonedTodaysDate) {
      patchLastDateOnApp(uid, timeZonedTodaysDate);
    }
  }, [lastDateOnApp]);

  useEffect(() => {
    getMessages();
  }, [messages]);

  useEffect(() => {
 
    let options = { hour: "numeric", hour12: false, timeZone: timeZone };
    const timeZoneDateNumber = new Intl.DateTimeFormat("en-US", options).format(
      todaysDate
    );
    const timeNumber = Number(timeZoneDateNumber);
    if (timeNumber < 12) {
      setGreeting("Good Morning");
    } else if ((timeNumber > 11) & (timeNumber < 17)) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, [isFocused]);

  useEffect(() => {
    if (dailyPain === timeZonedTodaysDate) {
      setDailyPainScore(dailyPainScores[dailyPainScores.length - 1]);
      setDailyPainStep(1);
    } else {
      setDailyPainScore({
        id: null,
        score: 5,
        date_time_value: null,
      });
    }
  }, [dailyPainScores]);

  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  useEffect(() => {
    if (tour !== null) {
      setTourVisible(true);
    }
  }, [tour]);

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
          accessToWellnessCoach={accessToWellnessCoach}
        />
        <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
          <Greeting greeting={greeting} name={userInfo.first_name} />
          <SubHeader title={"TODAY'S PAIN SCORE"} size={14} />
          {dailyPainScore.id ? (
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
          {!completedAllEducationModules || !noMovementModules ? (
            <EducationUnitCard navigation={navigation} />
          ) : null}
          {!completedAllMovementModules ||
          educationProgram !== 10 ||
          educationProgram !== 11 ? (
            <>
              <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
              <MovementUnitCard navigation={navigation} isFocused={isFocused} />
            </>
          ) : null}
          <SubHeader title={"DAILY ACTIVITIES"} size={14} />
          <View style={{ marginBottom: 16 }}>
            {hasUnreadMessages && accessToWellnessCoach ? (
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
        <DashboardTour />
        <WellnessCoachReminder navigation={navigation} />
      </SafeView>
    </Provider>
  );
};
