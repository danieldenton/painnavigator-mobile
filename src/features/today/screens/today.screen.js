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
import { MovementContext } from "../../../services/movement/movement.context";
import { WellnessCoachContext } from "../../../services/wellness/wellness-coach.context";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
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

export const TodayScreen = ({ navigation }) => {
  const { uid, setAppUpdateRequired } = useContext(AuthenticationContext);
  const { setPainScoreLoggedToday } = useContext(DailyPainContext);
  const { tour } = useContext(OnboardContext);
  const { setCompletedProgram } = useContext(OutcomeContext);
  const { getPainJournals } = useContext(PainJournalContext);
  const {
    getMovementModuleCompletions,
    movementProgram,
    movementProgress,
    setMovementProgram,
  } = useContext(MovementContext);
  const { setEducationProgram, setEducationProgress } =
    useContext(EducationContext);
  const { loadMessages, hasUnreadMessages, setWellnessCoachReminded } =
    useContext(WellnessCoachContext);
  const [userData, setUserData] = useState(null);

  const isFocused = useIsFocused();

  const loadUserData = async () => {
    try {
      const data = await getUser(uid);
      setUserData(data);
      setPainScoreLoggedToday(data.pain_score_logged_today);
      setMovementProgram(data.movement_program);
      setEducationProgram(data.education_program);
      setEducationProgress(data.education_progress.progress);
      setCompletedProgram(data.completed_program);
      setWellnessCoachReminded(data.wellness_coach_reminded);
      setAppUpdateRequired(data.app_update_required);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUserData();
    // remove all of these
    // getFoodJournals(uid);
    getMoodJournals(uid);
    getPainJournals();
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  useEffect(() => {
    getMovementModuleCompletions(uid);
  }, [movementProgram]);

  useEffect(() => {
    loadMessages(uid);
  }, [isFocused]);

  return (
    <>
      {userData && movementProgress ? (
        <Provider>
          <SafeView>
            <>
              <TodayNavBar
                navigation={navigation}
                hasUnreadMessages={hasUnreadMessages}
              />
              <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
                <Greeting
                  name={userData.profile.first_name}
                  isFocused={isFocused}
                />
                <DailyPainScore navigation={navigation} />
                <TodaysMovement navigation={navigation} isFocused={isFocused} />
                <TodaysEducation
                  navigation={navigation}
                  educationToday={userData.education_today}
                />
                <DailyActivities
                  navigation={navigation}
                  profileComplete={userData.profile.profile_status === 1}
                  journaledToday={userData.journaled_today}
                  activeSmartGoal={userData.active_smart_goal}
                  smartGoalUpdatedToday={userData.smart_goal_updated_today}
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
