import React, { useContext } from "react";
import { ProfileContext } from "../../../services/profile/profile-context";
import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { Commitment } from "./commitment.component";
import { ProgramPaceGoal } from "../components/program-pace-goal.component";
import { PrivacyPolicy } from "../components/privacy-policy.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { HeaderBar, NavigationBarLeft } from "../../../components/journals/navigation-bar.component";

export const ProfileSetup = ({ navigation }) => {
    const { completeOnboarding, onboardStep, previousOnboardingStep, nextOnboardingStep } = useContext(ProfileContext);

    return(
        <>
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
                    onPress={() => {
                        {   onboardStep === 3 ? 
                            (
                                completeOnboarding()
                                //navigation.navigate("OnboardingComplete")
                            )
                            :
                            nextOnboardingStep()
                        }
                    }} 
                />
                <ProgressDots progress={onboardStep} total={3} />
            </ButtonSection>
        </>
    );
};