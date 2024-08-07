import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TodayScreen } from "../../features/today/screens/today.screen";
import { MyProgress } from "../../features/progress/screens/my-progress.screen";
import { UnitsNavigator } from "./units.navigator";
import { EducationNavigator } from "./education.navigator";
import { MovementNavigator } from "./movement.navigator";
import { JournalsNavigator } from "./journals.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { SmartGoalNavigator } from "./smart-goal.navigator";
import { ProfileNavigator } from "./profile.navigator";
import { JournalCreatedScreen } from "../../components/journals/journal-created.screen";
import { JournalUpdatedScreen } from "../../components/journals/journal-updated.screen";
import { JournalDeletedScreen } from "../../components/journals/journal-deleted.screen";
import { WellnessCoachNavigator } from "./wellness-coach.navigator";
import { ContactScreen } from "../../features/today/screens/contact.screen";
import { TermsOfUse } from "../../features/account/screens/terms-of-use.screen";
import { Privacy } from "../../features/account/screens/privacy-policy.screen";
import { SentScreen } from "../../features/today/screens/sent.screen";
import { DailyPainNavigator } from "./daily-pain.navigator";
import { PainJournalNavigator } from "./pain-journal.navigator";
import { CompletiontNavigator } from "./completion.navigator";

const TodayStack = createStackNavigator();

export const TodayNavigator = () => {
    return (
        <TodayStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <TodayStack.Screen name="Today" component={TodayScreen} />
            <TodayStack.Screen name="Units" component={UnitsNavigator} />
            <TodayStack.Screen name="Education" component={EducationNavigator} />
            <TodayStack.Screen name="Movement" component={MovementNavigator} />
            <TodayStack.Screen name="DailyPainScore" component={DailyPainNavigator} />
            <TodayStack.Screen name="PainJournals" component={PainJournalNavigator} />
            <TodayStack.Screen name="JournalsNavigator" component={JournalsNavigator} />
            <TodayStack.Screen name="Progress" component={MyProgress} />
            <TodayStack.Screen name="Completion" component={CompletiontNavigator} />
            <TodayStack.Screen name="Settings" component={SettingsNavigator} />
            <TodayStack.Screen name="SmartGoals" component={SmartGoalNavigator} />
            <TodayStack.Screen name="JournalCreated" component={JournalCreatedScreen} />
            <TodayStack.Screen name="JournalUpdated" component={JournalUpdatedScreen} />
            <TodayStack.Screen name="JournalDeleted" component={JournalDeletedScreen} />
            <TodayStack.Screen name="WellnessCoach" component={WellnessCoachNavigator} />
            <TodayStack.Screen name="Profile" component={ProfileNavigator} />
            <TodayStack.Screen name="Contact" component={ContactScreen} />
            <TodayStack.Screen name="Sent" component={SentScreen} />
            <TodayStack.Group screenOptions={{ presentation: 'modal' }}>
                <TodayStack.Screen name="Privacy" component={Privacy} />
                <TodayStack.Screen name="Terms" component={TermsOfUse} />
            </TodayStack.Group>
        </TodayStack.Navigator>
    );
};