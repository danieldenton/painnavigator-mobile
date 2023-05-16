import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { EnjoymentOfLife } from "../../../components/onboard-coutcome/enjoyment-of-life.component";
import { ActivityInterference } from "../../../components/onboard-coutcome/activity-interference.component";
import { HopeToAchieve } from "../components/hope-to-achieve.component";
import { Anxious } from "../../../components/onboard-coutcome/anxious"
import { UnableToStopWorrying } from "../../../components/onboard-coutcome/unable-to-stop-worrying"
import { LittleInterestOrPleasure } from "../../../components/onboard-coutcome/little-interest-or-pleasure"
import { Depressed } from "../../../components/onboard-coutcome/depressed"
import { PainInjections } from "../components/pain-injections";
import { SpineSurgery } from "../components/spine-surgery";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component"; 


export const ProfileSetupScreen = ({ navigation }) => {
    const { step, previousStep, nextStep, onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);

    pages = [
        <AvgPainPreStart />, 
        <EnjoymentOfLife onValueChange={changeOnboardEntry} data={onboardingData} />, 
        <ActivityInterference onValueChange={changeOnboardEntry} data={onboardingData} />, 
        <HopeToAchieve />, 
        <Anxious onValueChange={changeOnboardEntry} data={onboardingData} />, 
        <UnableToStopWorrying onValueChange={changeOnboardEntry} data={onboardingData} />, 
        <LittleInterestOrPleasure onValueChange={changeOnboardEntry} data={onboardingData} />, 
        <Depressed onValueChange={changeOnboardEntry} data={onboardingData} />,
        <PainInjections onValueChange={changeOnboardEntry} data={onboardingData} />,
        <SpineSurgery onValueChange={changeOnboardEntry} data={onboardingData} />
    ]
    console.log(onboardingData)

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