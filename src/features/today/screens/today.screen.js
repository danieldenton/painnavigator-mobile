import React, { useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { Greeting } from "../components/greeting.component";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { EducationContext } from "../../../services/education/education.context";
import { MovementContext } from "../../../services/movement/movement.context";
import { SubHeader } from "../../../components/typography.component"; 

export const TodayScreen = ({ navigation }) => {
    const { name } = useContext(ProfileContext).userInfo;
    const { nextEducationModule } = useContext(EducationContext);
    const { currentMovementModule, videos, videosCompleted } = useContext(MovementContext);

    return (
        <SafeArea>
            <Greeting timeOfDay={"Morning"} name={name} />
            <SubHeader title={"TODAY'S EDUCATION"} size={14} />
            <EducationUnitCard 
                navigation={navigation} 
                nextEducationModule={nextEducationModule} 
            />
            <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
            <MovementUnitCard 
                navigation={navigation} 
                currentMovementModule={currentMovementModule} 
                videosCompleted={videosCompleted}
                videos={videos}
            />
            <SubHeader title={"DAILY ACTIVITIES"} size={14} />
            <DailyActivitiesTile 
                navigation={navigation} 
                destination={"JournalsNavigator"} 
                title={"Make a Journal Entry"}
            />
        </SafeArea>
    )
};