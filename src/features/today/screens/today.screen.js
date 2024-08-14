import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Audio } from "expo-av";
import { Provider } from "react-native-paper";
import { getUser } from "../../../services/authentication/authentication.service";
import { Greeting } from "../components/greeting.component";
import { EducationContext } from "../../../services/education/education.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { OnboardContext } from "../../../services/onboard/onboard.context";
import { OutcomeContext } from "../../../services/outcome/outcome.context";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { ProfileContext } from "../../../services/profile/profile-context";
import { MovementContext } from "../../../services/movement/movement.context";
import { WellnessCoachContext } from "../../../services/wellness/wellness-coach.context";
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

export const TodayScreen = ({ navigation }) => {
  const { uid, setAppUpdateRequired } = useContext(AuthenticationContext);
  const { setPainScoreLoggedToday } = useContext(DailyPainContext);
  const { tour } = useContext(OnboardContext);
  const { setCompletedProgram } = useContext(OutcomeContext);
  const { setUserInfo } = useContext(ProfileContext);
  const {
    loadMovementModuleCompletions,
    movementProgram,
    movementProgress,
    setMovementProgram,
  } = useContext(MovementContext);
  const { setEducationProgram, setEducationProgress, setInjectionModuleType } =
    useContext(EducationContext);
  const { loadMessages, hasUnreadMessages, setWellnessCoachReminded } =
    useContext(WellnessCoachContext);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isFocused = useIsFocused();

  const loadUserData = async () => {
    try {
      setIsLoading(true);
      const data = await getUser(uid);
      // setUserData(data);
      setUserData({
        educationToday: data.education_today,
        journaledToday: data.journaled_today,
        painScoreLoggedToday: data.pain_score_logged_today,
        activeSmartGoal: data.active_smart_goal,
        smartGoalUpdatedToday: data.smart_goal_updated_today,
      });
      setUserInfo(data.profile);
      setPainScoreLoggedToday(data.pain_score_logged_today);
      setMovementProgram(data.movement_program);
      setInjectionModuleType(data.injection_module_type);
      setEducationProgram(data.education_program);
      setEducationProgress(data.education_progress.progress);
      setCompletedProgram(data.completed_program);
      setWellnessCoachReminded(data.wellness_coach_reminded);
      setAppUpdateRequired(data.app_update_required);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUserData();
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  useEffect(() => {
    loadMovementModuleCompletions(uid);
  }, [movementProgram]);

  useEffect(() => {
    loadMessages(uid);
  }, [isFocused]);

  return (
    <>
      {!isLoading && movementProgress ? (
        <Provider>
          <SafeView>
            <>
              <TodayNavBar
                navigation={navigation}
                hasUnreadMessages={hasUnreadMessages}
              />
              <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
                <Greeting isFocused={isFocused} />
                <DailyPainScore navigation={navigation} />
                <TodaysMovement navigation={navigation} isFocused={isFocused} />
                <TodaysEducation
                  navigation={navigation}
                  educationToday={userData?.educationToday}
                />
                <DailyActivities
                  navigation={navigation}
                  journaledToday={userData?.journaledToday}
                  activeSmartGoal={userData?.activeSmartGoal}
                  smartGoalUpdatedToday={userData?.smartGoalUpdatedToday}
                />
              </Scroll>
              <DashboardTour tour={tour} />
              <AppUpdateRequired />
              <WellnessCoachReminder navigation={navigation} />
            </>
          </SafeView>
        </Provider>
      ) : (
        <ActivityIndicator
          size="large"
          color="#37b29d"
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "white",
          }}
        />
      )}
    </>
  );
};
