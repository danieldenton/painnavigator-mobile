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
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { SubHeader } from "../../../components/typography.component"; 
import { TodayNavBar } from "../../../components/journals/navigation-bar.component";
import { LockedModule } from "../components/locked-module.component";
import { View, Text } from "react-native";
import { Journals, NewSmartGoal, ProfileSetup, SmartGoalUpdate } from "../components/daily-activities.component";
import * as Localization from 'expo-localization';
import { formatInTimeZone } from 'date-fns-tz';
import { Audio } from 'expo-av';

export const TodayScreen = ({ navigation }) => {
    const { userInfo, profileComplete } = useContext(ProfileContext);
    const { activeGoal } = useContext(SmartGoalContext);
    const { journaledToday: painJournaledToday } = useContext(PainJournalContext);
    const { journaledToday: moodJournaledToday } = useContext(MoodJournalContext);
    const { hasUnreadMessages, messages } = useContext(WellnessCoachContext);
    const [timeOfDay, setTimeOfDay] = useState("");

    const messagesRecieved = messages.filter(message => message.sender_id === 1);
    const messagesRecievedIndex = messagesRecieved.length - 1;
    const last_message_id = messagesRecieved[messagesRecievedIndex].id;
    
    //TODO: move this to a helper file
    //useEffect(() => {
        //const time_zone = Localization.timezone;
        // TODO: fix RangeError: Invalid time value
        //const date = new Date ();
        //const time_zoned_date = formatInTimeZone(date, time_zone, 'HH');
        //const time_number = Number(time_zoned_date);

        //if(time_number < 12) {
            //setTimeOfDay("Morning")
        //} else if(time_number > 12 & time_number < 17) {
            //setTimeOfDay("Afternoon")
        //} else {
            //setTimeOfDay("Evening")
        //}
    //}, []);

    useEffect(() => { 
        Audio.setAudioModeAsync({ playsInSilentModeIOS: true }); 
    }, []);

    return (
        <SafeView>
            <TodayNavBar navigation={navigation} hasUnreadMessages={hasUnreadMessages} />
            <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
                <Greeting timeOfDay={"timeOfDay"} name={userInfo.first_name} />
                <SubHeader title={"TODAY'S EDUCATION"} size={14} />
                <DailyGoalCompleted type={"module"} />
                <EducationUnitCard navigation={navigation} />
                <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
                <MovementUnitCard navigation={navigation} />
                <LockedModule />
                <SubHeader title={"DAILY ACTIVITIES"} size={14} />
                <View style={{ marginBottom: 16 }}>
                    {!profileComplete && <ProfileSetup navigation={navigation} />}
                    {activeGoal ? <SmartGoalUpdate navigation={navigation} /> : <NewSmartGoal navigation={navigation} />}
                    {painJournaledToday ? <DailyGoalCompleted type={"Pain"} /> : <Journals navigation={navigation} />}
                </View>
            </Scroll>
        </SafeView>
    );
};