import React, { useContext, useEffect, useState } from "react";
import { Greeting } from "../components/greeting.component";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { DailyGoalCompleted } from "../components/daily-goal-completed.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ProfileContext } from "../../../services/profile/profile-context";
import { MovementContext } from "../../../services/movement/movement.context";
import { WellnessCoachContext } from "../../../services/wellness-coach/wellness-coach.context";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { SubHeader } from "../../../components/typography.component"; 
import { TodayNavBar } from "../../../components/journals/navigation-bar.component";
import { LockedModule } from "../components/locked-module.component";
import { View, Text, Platform } from "react-native";
import { Journals, NewSmartGoal, ProfileSetup, SmartGoalUpdate, WellnessCoach } from "../components/daily-activities.component";
import * as Localization from 'expo-localization';
import { formatInTimeZone } from 'date-fns-tz';
import { Audio } from 'expo-av';
import { formatDate } from "../../../infrastructure/helpers";
import { useIsFocused } from '@react-navigation/native';
import { getUser } from "../../../services/authentication/authentication.service";

export const TodayScreen = ({ navigation }) => {
    const { user } = useContext(AuthenticationContext);
    const { userInfo, profileComplete, setUserInfo, setProfileComplete } = useContext(ProfileContext);
    const { activeGoal } = useContext(SmartGoalContext);
    const { painJournals, setPainGraphData, setPainJournals } = useContext(PainJournalContext);
    const { moodJournals, setMoodJournals } = useContext(MoodJournalContext);
    const { foodJournals, setFoodJournals } = useContext(FoodJournalContext);
    const { movementProgress, lastMovement, setLastMovement, setMovementProgress } = useContext(MovementContext);
    const { educationProgress, lastCompletedModule, setEducationProgress, setLastCompletedModule } = useContext(EducationContext);
    const { hasUnreadMessages, setMessages } = useContext(WellnessCoachContext);
    const [greeting, setGreeting] = useState("");

    const isFocused = useIsFocused();
    const time_zone = Localization.timezone;
    const todays_date = new Date ();
    const time_zoned_todays_date = formatInTimeZone(todays_date, time_zone, 'M/dd/yy');
    const COMPLETED_ALL_EDUCATION_MODULES = educationProgress === 63;
    const COMPLETED_ALL_MOVEMENT_MODULES = movementProgress === 37;
    const LAST_PAIN_JOURNAL = formatDate(Number(painJournals[0]?.created));
    const LAST_MOOD_JOURNAL = formatDate(Number(moodJournals[0]?.created));
    const LAST_FOOD_JOURNAL = formatDate(Number(foodJournals[0]?.created));
    const LAST_SMART_GOAL_UPDATE = formatDate(activeGoal?.goal_updates[0]?.date_time_value);
    const LAST_EDUCATION_MODULE = lastCompletedModule !== null && formatDate(lastCompletedModule);
    const LAST_EDUCATION_MODULE_ID = educationProgress - 1;
    const LAST_MOVEMENT_MODULE = lastMovement !== null && formatDate(lastMovement);

    useEffect(() => {
        if (!isFocused) {
            return;
        }

        getUser(
            user.user.uid,
            setUserInfo, 
            setMessages, 
            setEducationProgress, 
            setProfileComplete, 
            setMovementProgress,
            setPainJournals,
            setMoodJournals,
            setFoodJournals,
        );
    }, [isFocused]);
    
    useEffect(() => {
        if (!isFocused) {
            return;
        }

        if (Platform.OS === "android") {
            setGreeting("Hello")
            return 
        };

        const time_zone = Localization.timezone;
        const date = new Date ();
        const time_zoned_date = formatInTimeZone(date, time_zone, 'HH');
        const time_number = Number(time_zoned_date);

        if(time_number < 12) {
            setGreeting("Good Morning")
        } else if(time_number > 11 & time_number < 17) {
            setGreeting("Good Afternoon")
        } else {
            setGreeting("Good Evening")
        }
    }, [isFocused]);

    useEffect(() => { 
        Audio.setAudioModeAsync({ playsInSilentModeIOS: true }); 
    }, []);

    function renderJournalDailyActivity() {
        if(LAST_FOOD_JOURNAL !== time_zoned_todays_date & LAST_MOOD_JOURNAL !== time_zoned_todays_date & LAST_PAIN_JOURNAL !== time_zoned_todays_date) {
            return <Journals navigation={navigation} />
        };
    };

    function renderWellnessCoachMessageActivity() {
        if(hasUnreadMessages) {
            return <WellnessCoach navigation={navigation} />
        }
    }

    function renderSmartGoalDailyActivity() { 
        const USER_COMPLETED_SMART_GOAL_UNIT = educationProgress > 7;
        if(USER_COMPLETED_SMART_GOAL_UNIT < 7 && activeGoal) {
            if(LAST_SMART_GOAL_UPDATE === time_zoned_todays_date) {
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
                {!COMPLETED_ALL_EDUCATION_MODULES && <SubHeader title={"TODAY'S EDUCATION"} size={14} />}
                {LAST_EDUCATION_MODULE === time_zoned_todays_date && <DailyGoalCompleted type={"module"} moduleId={LAST_EDUCATION_MODULE_ID} />}
                {!COMPLETED_ALL_EDUCATION_MODULES && <EducationUnitCard navigation={navigation} />}
                {!COMPLETED_ALL_MOVEMENT_MODULES && 
                    <>
                        <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
                        <MovementUnitCard navigation={navigation} isFocused={isFocused} />
                    </>
                }
                <SubHeader title={"DAILY ACTIVITIES"} size={14} />
                <View style={{ marginBottom: 16 }}>
                    {renderWellnessCoachMessageActivity()}
                    {!profileComplete && <ProfileSetup navigation={navigation} />}
                    {renderJournalDailyActivity()}
                    {renderSmartGoalDailyActivity()}
                    {LAST_PAIN_JOURNAL === time_zoned_todays_date && <DailyGoalCompleted type={"Pain Journal"} />}
                    {LAST_MOOD_JOURNAL === time_zoned_todays_date && <DailyGoalCompleted type={"Mood Journal"} />}
                    {LAST_FOOD_JOURNAL === time_zoned_todays_date && <DailyGoalCompleted type={"Food Journal"} />}
                </View>
            </Scroll>
        </SafeView>
    );
};