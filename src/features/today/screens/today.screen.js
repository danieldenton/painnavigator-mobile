import React, { useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { Text } from "react-native";

import { TodayScreenHeader } from "../components/today-screen-header.component";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { EducationContext } from "../../../services/education/education.context";
import { MovementContext } from "../../../services/movement/movement.context";

export const TodayScreen = ({ navigation }) => {
    const { user } = useContext(AuthenticationContext);
    const { nextEducationModule } = useContext(EducationContext);
    const { currentMovementModule } = useContext(MovementContext);

    return (
        <SafeArea>
            <Text>{JSON.stringify(user.user.uid)}</Text>
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