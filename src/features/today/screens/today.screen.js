import React, { useContext, useEffect, useState } from "react";
import { Greeting } from "../components/greeting.component";
import { EducationContext } from "../../../services/education/education.context";
import { educationPrograms } from "./../../education/data/education-programs-data.json"
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
import { View } from "react-native";
import { Journals, NewSmartGoal, ProfileSetup, SmartGoalUpdate, WellnessCoach, DailyPainScore } from "../components/daily-activities.component";
import { Audio } from 'expo-av';
import { useIsFocused } from '@react-navigation/native';
import { getUser, patchLastDateOnApp } from "../../../services/authentication/authentication.service";
import { getMessages } from "../../../services/wellness-coach/wellness-coach.service";
import { getDailyPainScores } from "../../../services/daily-pain/daily-pain.service";
import { formatDate, todaysDate, timeZone, timeZonedTodaysDate } from "../../../utils";

export const TodayScreen = ({ navigation }) => {
    const {  user, setCompletedProgram, setEducationProgram, educationProgram, setLastDateOnApp, lastDateOnApp } = useContext(AuthenticationContext);
    const { setDailyPainScores, dailyPainScores, dailyPainScore, setDailyPainScore, setDailyPainStep } = useContext(DailyPainContext)
    const { userInfo, profileComplete, setUserInfo, setProfileComplete } = useContext(ProfileContext);
    const { activeGoal, setActiveGoal, setFinishedGoals } = useContext(SmartGoalContext);
    const { painJournals, setPainJournals } = useContext(PainJournalContext);
    const { moodJournals, setMoodJournals } = useContext(MoodJournalContext);
    const { foodJournals, setFoodJournals } = useContext(FoodJournalContext);
    const { movementProgress, setMovementProgress } = useContext(MovementContext);
    const { educationProgress, lastCompletedModule, setEducationProgress } = useContext(EducationContext);
    const { hasUnreadMessages, setMessages } = useContext(WellnessCoachContext);
    const [greeting, setGreeting] = useState("");

    const isFocused = useIsFocused();
    const educationProgramLength = educationPrograms[educationProgram - 1].educationModulesId.length
    const completedAllEducationModules = educationProgress > educationProgramLength
    const completedAllMovementModules = movementProgress > 36;
    const dailyPain = formatDate(dailyPainScores[dailyPainScores.length - 1]?.date_time_value)
    const lastPainJournal = formatDate(painJournals[0]?.date_time_value);
    const lastMoodJournal = formatDate(moodJournals[0]?.date_time_value);
    const lastFoodJournal = formatDate(foodJournals[0]?.date_time_value);
    const lastSmartGoalUpdate = formatDate(activeGoal?.goal_updates[0]?.date_time_value);
    const lastEducationModule= lastCompletedModule !== null && formatDate(lastCompletedModule);
    const lastEducationModuleId = educationProgress - 1;

    useEffect(() => {
        getUser(
            user.user.uid,
            setUserInfo,  
            setEducationProgram,
            setEducationProgress, 
            setMovementProgress,
            setProfileComplete, 
            setCompletedProgram,
            setLastDateOnApp
        );
        getDailyPainScores(user.user.uid, setDailyPainScores)
        getSmartGoals(user.user.uid, setActiveGoal, setFinishedGoals)
        getPainJournals(user.user.uid, setPainJournals)
        getMoodJournals(user.user.uid, setMoodJournals)
        getFoodJournals(user.user.uid, setFoodJournals)
    }, []);

    useEffect(() => {
        if (lastDateOnApp !== timeZonedTodaysDate) {
            patchLastDateOnApp(user.user.uid, timeZonedTodaysDate)
        }
    }, [lastDateOnApp])
   
    useEffect(() => {
        getMessages(user.user.uid, setMessages)
        let options = {hour: 'numeric', hour12: false, timeZone: timeZone }
        const timeZoneDateNumber = new Intl.DateTimeFormat('en-US', options).format(todaysDate)
        const timeNumber = Number(timeZoneDateNumber);
        if (timeNumber < 12) {
            setGreeting("Good Morning")
        } else if (timeNumber > 11 & timeNumber < 17) {
            setGreeting("Good Afternoon")
        } else {
            setGreeting("Good Evening")
        }
    }, [isFocused]);

    useEffect(() => {
        if (dailyPain === timeZonedTodaysDate) {
            setDailyPainScore(dailyPainScores[dailyPainScores.length -1])
            setDailyPainStep(1)
        } else {
            setDailyPainScore({
                id: null,
                score: 5,
                date_time_value: null
            })
            setDailyPainStep(0)
        }
    }, [dailyPainScores])

    useEffect(() => { 
        Audio.setAudioModeAsync({ playsInSilentModeIOS: true }); 
    }, []);

    function renderDailyPainScore() {
        if(dailyPainScore.id) {
            return <DailyGoalCompleted type={"Daily Pain Score Logged"} />
        } else {
            return <DailyPainScore navigation={navigation} />
        }
    }

    function renderJournalDailyActivity() {
        if(lastFoodJournal !== timeZonedTodaysDate & lastMoodJournal !== timeZonedTodaysDate & lastPainJournal !== timeZonedTodaysDate) {
            return <Journals navigation={navigation} />
        };
    };

    function renderWellnessCoachMessageActivity() {
        if(hasUnreadMessages) {
            return <WellnessCoach navigation={navigation} />
        }
    }

    function renderSmartGoalDailyActivity() { 
        const userCompletedSmartGoalUnit = educationProgress > 7;
        if(userCompletedSmartGoalUnit && activeGoal) {
            if(lastSmartGoalUpdate === timeZonedTodaysDate) {
                return <DailyGoalCompleted type={"Smart Goal Update"} />
            } else {
                return <SmartGoalUpdate navigation={navigation} />
            }
        } else if(educationProgress > 7) {
            return <NewSmartGoal navigation={navigation} />
        } else {
            return null
        };
    };

    return (
        <SafeView>
            <TodayNavBar navigation={navigation} hasUnreadMessages={hasUnreadMessages} />
            <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
                <Greeting greeting={greeting} name={userInfo.first_name} />
                {!completedAllEducationModules && <SubHeader title={"TODAY'S EDUCATION"} size={14} />}
                { lastEducationModule === timeZonedTodaysDate && <DailyGoalCompleted type={"module"} moduleId={lastEducationModuleId} />}
                {!completedAllEducationModules && <EducationUnitCard navigation={navigation} />}
                {!completedAllMovementModules && 
                    <>
                        <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
                        <MovementUnitCard navigation={navigation} isFocused={isFocused} />
                    </>
                }
                <SubHeader title={"DAILY ACTIVITIES"} size={14} />
                <View style={{ marginBottom: 16 }}>
                    {renderWellnessCoachMessageActivity()}
                    {renderDailyPainScore()}
                    {!profileComplete && <ProfileSetup navigation={navigation} />}
                    {renderJournalDailyActivity()}
                    {renderSmartGoalDailyActivity()}
                    {lastPainJournal === timeZonedTodaysDate && <DailyGoalCompleted type={"Pain Journal"} />}
                    {lastMoodJournal === timeZonedTodaysDate && <DailyGoalCompleted type={"Mood Journal"} />}
                    {lastFoodJournal === timeZonedTodaysDate && <DailyGoalCompleted type={"Food Journal"} />}
                </View>
            </Scroll>
        </SafeView>
    );
};