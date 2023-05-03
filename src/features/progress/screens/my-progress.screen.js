import React, { useContext } from "react";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { ProgressScreenWrapper } from "../components/progress.styles";
import { EducationProgress } from "../components/education-progress.component";
import { MovementProgress } from "../components/movement-progress.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { MoveOnQuestionWrapper, MoveOnQuestion } from "../components/progress.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const MyProgress = ({ navigation }) => {
    const { user, completeProgram } = useContext(AuthenticationContext)

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
                    completeProgram(user.user.uid)
                    }}
                    title={"Move Into Maintenance"} 
                />
                </ButtonSection>
            
        </SafeView>
    );
};