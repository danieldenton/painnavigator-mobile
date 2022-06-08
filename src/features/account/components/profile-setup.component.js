import React, { useContext } from "react";
import { ProfileContext } from "../../../services/profile/profile-context";
import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { Commitment } from "./commitment.component";
import { ProgramPaceGoal } from "../components/program-pace-goal.component";
import { PrivacyPolicy } from "../components/privacy-policy.component";
import { Congratulations } from "../components/congratulations";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";

export const ProfileSetup = ({ navigation }) => {
    const { onboardStep, previousOnboardingStep, nextOnboardingStep } = useContext(ProfileContext);

    return(
        <>
            <NavigationBarLeft navigation={navigation} screen={"Sign Up"} previousPage={previousOnboardingStep} />
            {onboardStep === 1 && <AvgPainPreStart /> }
            {onboardStep === 2 && <Commitment />}
            {onboardStep === 3 && <ProgramPaceGoal />}
            {onboardStep === 4 && <Congratulations />}
            <ButtonSection>
                <JournalButton title={"Next"} onPress={nextOnboardingStep} />
                <ProgressDots progress={onboardStep} total={3} />
            </ButtonSection>
        </>
    );
};