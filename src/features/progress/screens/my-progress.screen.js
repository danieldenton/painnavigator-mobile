import React from "react";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { ProgressScreenWrapper } from "../components/progress.styles";
import { EducationProgress } from "../components/education-progress.component";
import { MovementProgress } from "../components/movement-progress.component";

export const MyProgress = ({ navigation }) => {

    return (
        <SafeView>
            <NavigationBarLeft 
                destination={"Today"} 
                navigation={navigation} 
                screen={"My Progress"} 
            />
            <ProgressScreenWrapper>
                <EducationProgress />
                <MovementProgress />
            </ProgressScreenWrapper>
        </SafeView>
    );
};