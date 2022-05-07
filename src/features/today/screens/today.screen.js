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
import { SubHeader } from "../../../components/typography.component"; 
import { TodayNavBar } from "../../../components/journals/navigation-bar.component";
import { LockedModule } from "../components/locked-module.component";
import { Scroll } from "../../../components/scroll.component";

export const TodayScreen = ({ navigation }) => {
    const { name } = useContext(ProfileContext).userInfo;
    const { nextEducationModule } = useContext(EducationContext);
    const { currentModule } = useContext(MovementContext);

    return (
        <SafeView>
            <TodayNavBar navigation={navigation} />
            <Scroll>
                <Greeting timeOfDay={"Morning"} name={name} />
                <SubHeader title={"TODAY'S EDUCATION"} size={14} />
                <DailyGoalCompleted />
                <EducationUnitCard navigation={navigation} />
                <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
                <MovementUnitCard 
                    navigation={navigation} 
                    currentModule={currentModule} 
                />
                <LockedModule />
                <SubHeader title={"DAILY ACTIVITIES"} size={14} />
                <DailyActivitiesTile 
                    navigation={navigation} 
                    destination={"JournalsNavigator"} 
                    title={"Make a Journal Entry"}
                />
            </Scroll>
        </SafeView>
    );
};