import React, { useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Audio } from "expo-av";
import { Provider } from "react-native-paper";
import { getUser } from "../../../services/authentication/authentication.service";
import { Greeting } from "../components/greeting.component";
import { EducationContext } from "../../../services/education/education.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { OnboardContext } from "../../../services/onboard/onboard.context";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { ProfileContext } from "../../../services/profile/profile-context";
import { MovementContext } from "../../../services/movement/movement.context";
import { WellnessCoachContext } from "../../../services/wellness/wellness-coach.context";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { getFoodJournals } from "../../../services/food-journal/food-journal.service";
import { getMoodJournals } from "../../../services/mood-journal/mood-journal.service";
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
import { LoadingComponent } from "../components/loading.component";

export const TodayScreen = ({ navigation }) => {
  const { uid } = useContext(AuthenticationContext);
  const { loadDailyPainScores } = useContext(DailyPainContext);
  const { tour } = useContext(OnboardContext);
  // const { userInfo } = useContext(ProfileContext);
  const { getPainJournals } = useContext(PainJournalContext);
  const { getSmartGoals } = useContext(SmartGoalContext);
  const { getMovementModuleCompletions, movementProgram, setMovementProgram } =
    useContext(MovementContext);
  const { getEducationModuleCompletions } = useContext(EducationContext);
  const { loadMessages, hasUnreadMessages } = useContext(WellnessCoachContext);
  const [userData, setUserData] = useState(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await getUser(uid);
        setUserData(data);
        const eProgress = data.education_progress.education_progress
          ? data.education_progress.education_progress
          : data.education_progress.progress;
        setMovementProgram(data.movement_program);
        setEducationProgram(data.education_progress.progress);
        setEducationProgress(eProgress);
        setProfileComplete(data.profile.profile_status === 1);
        setCompletedProgram(data.completed_program === true);
        setWellnessCoachReminded(data.wellness_coach_reminded);
        // setAppUpdateRequired(userData.app_update_required);
        // updateUser(userData);
      } catch (error) {
        console.error(error);
      }
    };
    loadUserData();

    // remove all of these
    loadDailyPainScores(uid);
    getEducationModuleCompletions(uid);

    // journaled today handled
    getFoodJournals(uid);
    getMoodJournals(uid);
    getPainJournals();
    getSmartGoals();
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  useEffect(() => {
    getMovementModuleCompletions(uid);
  }, [movementProgram]);

  useEffect(() => {
    loadMessages(uid);
  }, [isFocused]);

  return (
    <Provider>
      {userData ? (
        <SafeView>
          <TodayNavBar
            navigation={navigation}
            hasUnreadMessages={hasUnreadMessages}
          />
          <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
            <Greeting
              name={userData.profile.first_name}
              isFocused={isFocused}
            />
            <DailyPainScore
              navigation={navigation}
              painScoreLoggedToday={userData.pain_score_logged_today}
            />
            <TodaysMovement navigation={navigation} isFocused={isFocused} />
            <TodaysEducation navigation={navigation} />
            <DailyActivities navigation={navigation} />
          </Scroll>
          <DashboardTour tour={tour} />
          <AppUpdateRequired />
          <WellnessCoachReminder navigation={navigation} />
        </SafeView>
      ) : (
        <LoadingComponent />
      )}
    </Provider>
  );
};
