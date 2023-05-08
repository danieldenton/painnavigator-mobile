import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { EnjoymentOfLife } from "../components/enjoyment-of-life.component";
import { ActivityInterference } from "../components/activity-interference.component";
import { HopeToAchieve } from "../components/hope-to-achieve.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component"; 


export const OutcomeScreen = ({ navigation }) => {
    const { onboardStep, previousOnboardingStep, nextOnboardingStep } = useContext(AuthenticationContext);

    pages = [{ page: <AvgPainPreStart />}, { page: <EnjoymentOfLife />, }, { page: <ActivityInterference />, }, { page: <HopeToAchieve />, }]

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
                        onboardStep === 3 ? navigation.navigate("Register") : nextOnboardingStep()
                    }} 
                />
                <ProgressDots progress={onboardStep +1} total={4} />
            </ButtonSection>
        </SafeView>
    );
};