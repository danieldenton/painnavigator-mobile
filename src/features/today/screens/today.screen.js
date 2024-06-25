import React, { useContext, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Audio } from "expo-av";
import { Provider } from "react-native-paper";
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

export const TodayScreen = ({ navigation }) => {
  const { uid, loadUserData } = useContext(AuthenticationContext);
  const { loadDailyPainScores } = useContext(DailyPainContext);
  const { tour } = useContext(OnboardContext);
  const { userInfo } = useContext(ProfileContext);
  const { getPainJournals } = useContext(PainJournalContext);
  const { getSmartGoals } = useContext(SmartGoalContext);
  const { getMovementModuleCompletions, movementProgram } =
    useContext(MovementContext);
  const { getEducationModuleCompletions } = useContext(EducationContext);
  const { loadMessages, hasUnreadMessages } = useContext(WellnessCoachContext);

  const isFocused = useIsFocused();

  useEffect(() => {
    loadUserData();
    loadDailyPainScores(uid);
    getEducationModuleCompletions(uid);
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
