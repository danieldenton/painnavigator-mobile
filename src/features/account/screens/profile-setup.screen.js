import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { Commitment } from "../components/commitment.component";
import { ProgramPaceGoal } from "../components/program-pace-goal.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { HeaderBar, NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component"; 

export const ProfileSetupScreen = ({ navigation }) => {
    const { onboardStep, previousOnboardingStep, nextOnboardingStep } = useContext(AuthenticationContext);

    return(
        <SafeView>
            {onboardStep === 1 ? 
                <HeaderBar screen={"Sign Up"} /> 
                : 
                <NavigationBarLeft navigation={navigation} screen={"Sign Up"} previousPage={previousOnboardingStep} />
            }
            {onboardStep === 1 && <AvgPainPreStart /> }
            {onboardStep === 2 && <Commitment />}
            {onboardStep === 3 && <ProgramPaceGoal />}
            <ButtonSection>
                <JournalButton 
                    title={"Next"} 
                    onPress={() => {onboardStep === 3 ? navigation.navigate("Register") : nextOnboardingStep()}} 
                />
                <ProgressDots progress={onboardStep} total={3} />
            </ButtonSection>
        </SafeView>
    );
};