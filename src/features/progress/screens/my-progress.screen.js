import React from "react";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { ProgressScreenWrapper } from "../components/progress.styles";
import { EducationProgress } from "../components/education-progress.component";
import { MovementProgress } from "../components/movement-progress.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { MoveOnQuestionWrapper, MoveOnQuestion } from "../components/progress.styles";

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
            <MoveOnQuestionWrapper>
                <MoveOnQuestion>Do you feel like you're ready to move into the maintenance portion of our program?</MoveOnQuestion>
            </MoveOnQuestionWrapper>
            <ButtonSection>
                <ModuleButton 
                    onPress={() => {
                    navigation.navigate("ProgramCompleted")
                    }}
                    title={"Ready to move on"} 
                />
                </ButtonSection>
            
        </SafeView>
    );
};