import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { EnjoymentOfLife } from "../components/enjoyment-of-life.component";
import { ActivityInterference } from "../components/activity-interference.component";
import { HopeToAchieve } from "../components/hope-to-achieve.component";
import { OutcomeAnxious } from "../../completion/components/outcomeAnxious"
import { OutcomeUnableToSopWorrying } from "../../completion/components/outcomeUnableToStopWorrying"
import { OutcomeLittleInterestOrPleasure } from "../../completion/components/outcomeLittleInterestOrPleasure"
import { OutcomeDepressed } from "../../completion/components/outcomeDepressed"
import { PainInjections } from "../components/pain-injections";
import { SpineSurgery } from "../components/spine-surgery";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component"; 


export const ProfileSetupScreen = ({ navigation }) => {
    const { step, previousStep, nextStep } = useContext(AuthenticationContext);

    pages = [
        <AvgPainPreStart />, 
        <EnjoymentOfLife />, 
        <ActivityInterference />, 
        <HopeToAchieve />, 
        <OutcomeAnxious />, 
        <OutcomeUnableToSopWorrying />, 
        <OutcomeLittleInterestOrPleasure />, 
        <OutcomeDepressed />,
        <PainInjections />,
        <SpineSurgery />
    ]

    return(
        <SafeView>
            <NavigationBarLeft 
                destination={"Onboard"} 
                navigation={navigation} 
                screen={"Sign Up"} 
                previousPage={step >  0 ? previousStep : null} 
            />
            {pages[step]}
            <ButtonSection>
                <JournalButton 
                    title={"Next"} 
                    onPress={() => {
                        step === 9 ? navigation.navigate("Register") : nextStep()
                    }} 
                />
                <ProgressDots progress={step +1} total={10} />
            </ButtonSection>
        </SafeView>
    );
};