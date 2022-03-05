import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { TodayScreenHeader } from "../components/today-screen-header.component";
import { EducationModuleCard } from "../components/education-module-card.component";

import { EducationModulesContext } from "../../../services/educationModules/education-modules.context";

export const TodayScreen = ({ navigation }) => {
    const { nextEducationModule } = useContext(EducationModulesContext);
    
    return (
        <SafeArea>
            <TodayScreenHeader headerName="Today's Education"/>
            <EducationModuleCard navigation={navigation} nextEducationModule={nextEducationModule} />
        </SafeArea>
    )
};