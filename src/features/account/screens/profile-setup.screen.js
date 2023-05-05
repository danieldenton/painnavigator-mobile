import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { EnjoymentOfLife } from "../components/enjoyment-of-life.component";
import { ActivityInterference } from "../components/activity-interference.component";
import { HopeToAchieve } from "../components/hope-to-achieve.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component"; 
import { track } from "@amplitude/analytics-react-native";
import { ONBOARD_EVENTS } from "../../../amplitude-events";

export const ProfileSetupScreen = ({ navigation }) => {
    const { onboardStep, previousOnboardingStep, nextOnboardingStep } = useContext(AuthenticationContext);

    pages = [
        {
            page: <EnjoymentOfLife />,
            trackEvent: ONBOARD_EVENTS.BASELINE_PAIN_SCALE
        },
        {
            page: <ActivityInterference />,
            trackEvent: ONBOARD_EVENTS.BASELINE_COMMITTED_TO_PROGRAM
        },
        {
            page: <HopeToAchieve />,
            trackEvent: ONBOARD_EVENTS.BASELINE_PACE_FOR_PROGRAM
        }
    ]

    return(
        <SafeView>
            <NavigationBarLeft 
                destination={"Onboard"} 
                navigation={navigation} 
                screen={"Sign Up"} 
                previousPage={onboardStep >  0 ? previousOnboardingStep : null} 
            />
            {pages[onboardStep].page}
            <ButtonSection>
                <JournalButton 
                    title={"Next"} 
                    onPress={() => {
                        track(pages[onboardStep].trackEvent)
                        onboardStep === 2 ? navigation.navigate("Register") : nextOnboardingStep()
                    }} 
                />
                <ProgressDots progress={onboardStep +1} total={3} />
            </ButtonSection>
        </SafeView>
    );
};