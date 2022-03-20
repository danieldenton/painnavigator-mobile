import React, { useEffect, useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { TodayScreenHeader } from "../components/today-screen-header.component";
import { EducationUnitCard } from "../../educationModules/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { DailyActivitiesTile } from "../../../components/dailyActivities/daily-activities-tile.component";

import { EducationModulesContext } from "../../../services/education/education.context";
import { MovementContext } from "../../../services/movement/movement.context";

export const TodayScreen = ({ navigation }) => {
    const { nextEducationModule } = useContext(EducationModulesContext);
    const { currentMovementModule } = useContext(MovementContext);

    return (
        <SafeArea>
            <TodayScreenHeader headerName="TODAY'S EDUCATION"/>
            <EducationUnitCard 
                navigation={navigation} 
                nextEducationModule={nextEducationModule} 
            />
            <TodayScreenHeader headerName="TODAY'S MOVEMENT"/>
            <MovementUnitCard 
                navigation={navigation} 
                currentMovementModule={currentMovementModule} 
            />
            <TodayScreenHeader headerName="DAILY ACTIVITIES"/>
            <DailyActivitiesTile 
                navigation={navigation} 
                destination={"JournalsNavigator"} 
                title={"Make a Journal Entry"}
            />
        </SafeArea>
    )
};