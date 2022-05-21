import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { Greeting } from "../components/greeting.component";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { DailyGoalCompleted } from "../components/daily-goal-completed.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { EducationContext } from "../../../services/education/education.context";
import { MovementContext } from "../../../services/movement/movement.context";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { SubHeader } from "../../../components/typography.component"; 
import { TodayNavBar } from "../../../components/journals/navigation-bar.component";
import { LockedModule } from "../components/locked-module.component";
import { Scroll } from "../../../components/scroll.component";
import { SmartGoalDailyActivity } from "../../../icons";
import { View } from "react-native";
import { Journals, NewSmartGoal, ProfileSetup, SmartGoalUpdate } from "../components/daily-activities.component";

export const TodayScreen = ({ navigation }) => {
    const { name } = useContext(ProfileContext).userInfo;
    const { activeGoal } = useContext(SmartGoalContext);

    return (
        <SafeView>
            <TodayNavBar navigation={navigation} />
            <Scroll>
                <Greeting timeOfDay={"Morning"} name={name} />
                <SubHeader title={"TODAY'S EDUCATION"} size={14} />
                <DailyGoalCompleted />
                <EducationUnitCard navigation={navigation} />
                <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
                <MovementUnitCard navigation={navigation} />
                <LockedModule />
                <SubHeader title={"DAILY ACTIVITIES"} size={14} />
                <View style={{ marginBottom: 16 }}>
                    <ProfileSetup navigation={navigation} />
                    {activeGoal ? <SmartGoalUpdate navigation={navigation} /> : <NewSmartGoal navigation={navigation} />}
                    <Journals navigation={navigation} />
                </View>
            </Scroll>
        </SafeView>
    );
};