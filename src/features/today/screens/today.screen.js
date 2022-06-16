import React, { useContext, useEffect, useState } from "react";
import { Greeting } from "../components/greeting.component";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { DailyGoalCompleted } from "../components/daily-goal-completed.component";
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
import { Journals, NewSmartGoal, ProfileSetup, SmartGoalUpdate } from "../components/daily-activities.component";
import * as Localization from 'expo-localization';
import { formatInTimeZone } from 'date-fns-tz';
import { Audio } from 'expo-av';
import { formatDate } from "../../../infrastructure/helpers";

export const TodayScreen = ({ navigation }) => {
    const { userInfo, profileComplete } = useContext(ProfileContext);
    const { activeGoal } = useContext(SmartGoalContext);
    const { painJournals } = useContext(PainJournalContext);
    const { moodJournals } = useContext(MoodJournalContext);
    const { foodJournals } = useContext(FoodJournalContext);
    const { educationProgress, lastCompletedModule } = useContext(EducationContext);
    const { hasUnreadMessages } = useContext(WellnessCoachContext);
    const [greeting, setGreeting] = useState("");

    const time_zone = Localization.timezone;
    const todays_date = new Date ();
    const time_zoned_todays_date = formatInTimeZone(todays_date, time_zone, 'M/dd/yy');
    
    const last_pain_journal_date = formatDate(painJournals[painJournals.length - 1]?.attributes.date_time_value);
    const last_mood_journal_date = formatDate(moodJournals[moodJournals.length - 1]?.attributes.date_time_value);
    const last_food_journal_date = formatDate(foodJournals[foodJournals.length - 1]?.attributes.date_time_value);
    
    //TODO: move this to a helper file
    useEffect(() => {
        if (Platform.OS === "android") {
            setGreeting("Hello")
            return 
        };

        const time_zone = Localization.timezone;
        //TODO: fix RangeError: Invalid time value
        const date = new Date ();
        const time_zoned_date = formatInTimeZone(date, time_zone, 'HH');
        const time_number = Number(time_zoned_date);

        if(time_number < 12) {
            setGreeting("Good Morning")
        } else if(time_number > 12 & time_number < 17) {
            setGreeting("Good Afternoon")
        } else {
            setGreeting("Good Evening")
        }
    }, []);

    useEffect(() => { 
        Audio.setAudioModeAsync({ playsInSilentModeIOS: true }); 
    }, []);

    function renderJournalDailyActivity() {
        if(last_food_journal_date !== time_zoned_todays_date & last_mood_journal_date !== time_zoned_todays_date & last_pain_journal_date !== time_zoned_todays_date) {
            return <Journals navigation={navigation} />
        };
    };

    function renderSmartGoalDailyActivity() { 
        if(educationProgress > 7 && activeGoal) {
            return <SmartGoalUpdate navigation={navigation} />
        } else if(educationProgress > 7) {
            return <NewSmartGoal navigation={navigation} />
        };
    };

    return (
        <SafeView>
            <TodayNavBar navigation={navigation} hasUnreadMessages={hasUnreadMessages} />
            <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
                <Greeting greeting={greeting} name={userInfo.first_name} />
                <SubHeader title={"TODAY'S EDUCATION"} size={14} />
                {lastCompletedModule?.date === time_zoned_todays_date && <DailyGoalCompleted type={"module"} moduleId={lastCompletedModule.module_id} />}
                <EducationUnitCard navigation={navigation} />
                <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
                <MovementUnitCard navigation={navigation} />
                <LockedModule />
                <SubHeader title={"DAILY ACTIVITIES"} size={14} />
                <View style={{ marginBottom: 16 }}>
                    {last_pain_journal_date === time_zoned_todays_date && <DailyGoalCompleted type={"Pain"} />}
                    {last_mood_journal_date === time_zoned_todays_date && <DailyGoalCompleted type={"Mood"} />}
                    {last_food_journal_date === time_zoned_todays_date && <DailyGoalCompleted type={"Food"} />}
                    {!profileComplete && <ProfileSetup navigation={navigation} />}
                    {renderSmartGoalDailyActivity()}
                    {renderJournalDailyActivity()}
                </View>
            </Scroll>
        </SafeView>
    );
};