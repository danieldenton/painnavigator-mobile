import React, { useContext, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Audio } from "expo-av";
import { Provider } from "react-native-paper";
import { Greeting } from "../components/greeting.component";
import { EducationContext } from "../../../services/education/education.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { getUser, patchExpoPushToken } from "../../../services/authentication/authentication";
import { OnboardContext } from "../../../services/onboard.context";
import { OutcomeContext } from "../../../services/outcome.context";
import { DailyPainContext } from "../../../services/daily-pain.context";
import { ProfileContext } from "../../../services/profile/profile-context";
import { MovementContext } from "../../../services/movement/movement.context";
import { WellnessCoachContext } from "../../../services/wellness-coach.context";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { MoodJournalContext } from "../../../services/mood-journal.context";
import { FoodJournalContext } from "../../../services/food-journal.context";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { TodayNavBar } from "../../../components/journals/navigation-bar.component";
import { TodaysMovement } from "../components/todays-movement.compoentn";
import { TodaysEducation } from "../components/todays-education.component";
import { DailyPainScore } from "../components/daily-pain-scores.component";
import { DailyActivities } from "../components/daily-activities.component";
import { DashboardTour } from "../../dashboard-tour/dashboard-tour";
import { WellnessCoachReminder } from "../components/wellness-coach-reminder.component";
import { AppUpdateRequired } from "../components/app-update-required.component";
import { timeZonedTodaysDate } from "../../../utils";

export const TodayScreen = ({ navigation }) => {
  const { uid, setLastDateOnApp, lastDateOnApp, setAppUpdateRequired } = useContext(AuthenticationContext);
  const { tour } = useContext(OnboardContext);
  const { setCompletedProgram } = useContext(OutcomeContext)
  const { getDailyPainScores } = useContext(DailyPainContext);
  const { setUserInfo, userInfo, setProfileComplete } = useContext(ProfileContext);
  const { getPainJournals } = useContext(PainJournalContext);
  const { getSmartGoals } = useContext(SmartGoalContext);
  const { getMoodJournals } = useContext(MoodJournalContext);
  const { getFoodJournals } = useContext(FoodJournalContext);
  const { getMovementModuleCompletions, setMovementProgram, movementProgram } =
    useContext(MovementContext);
  const { getEducationModuleCompletions, setEducationProgram, setEducationProgress } = useContext(EducationContext);
  const { getMessages, setWellnessCoachReminded, hasUnreadMessages } = useContext(WellnessCoachContext);

  const isFocused = useIsFocused();

  const loadUser = async () => {
    try {
      const userData = await getUser(uid);
      const eProgress = userData.education_progress.education_progress
      ? userData.education_progress.education_progress
      : userData.education_progress.progress;
    setUserInfo(userData.profile);
    setMovementProgram(userData.movement_program);
    setEducationProgram(userData.education_program);
    setEducationProgress(eProgress);
    setProfileComplete(userData.profile.profile_status === 1);
    setCompletedProgram(userData.completed_program === true);
    setLastDateOnApp(userData.last_date_on_app);
    setWellnessCoachReminded(userData.wellness_coach_reminded);
    setAppUpdateRequired(userData.app_update_required);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUser()
    getDailyPainScores(uid);
    getEducationModuleCompletions(uid);
    getFoodJournals();
    getMoodJournals();
    getPainJournals();
    getSmartGoals();
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  // TODO fix this.
  useEffect(() => {
    if (uid && expoPushToken) {
      patchExpoPushToken();
    }
  }, [uid, expoPushToken]);

  useEffect(() => {
    getMovementModuleCompletions(uid);
  }, [movementProgram]);

  useEffect(() => {
    getMessages(uid);
  }, [isFocused]);

  useEffect(() => {
    if (lastDateOnApp !== timeZonedTodaysDate) {
      patchLastDateOnAppAndAppVersion();
    }
  }, [lastDateOnApp]);

  return (
    <Provider>
      <SafeView>
        <TodayNavBar
          navigation={navigation}
          hasUnreadMessages={hasUnreadMessages}
        />
        <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
          <Greeting name={userInfo.first_name} isFocused={isFocused} />
          <DailyPainScore navigation={navigation} />
          <TodaysMovement navigation={navigation} isFocused={isFocused} />
          <TodaysEducation navigation={navigation} />
          <DailyActivities navigation={navigation} />
        </Scroll>
        <DashboardTour tour={tour} />
        <AppUpdateRequired />
        <WellnessCoachReminder navigation={navigation} />
      </SafeView>
    </Provider>
  );
};
