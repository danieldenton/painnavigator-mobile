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
        { component: <AvgPainPreStart />, disabled: false },
        { component: <EnjoymentOfLife onValueChange={changeOnboardEntry} data={onboardingData} />, disabled: false },
        { component: <ActivityInterference onValueChange={changeOnboardEntry} data={onboardingData} />, disabled: false },
        { component: <HopeToAchieve />, disabled: onboardingData.hopesToAchieve.length > 0 ? false : true },
        { component: <Anxious onValueChange={changeOnboardEntry} data={onboardingData} />, disabled: onboardingData.anxious ? false : true },
        { component: <UnableToStopWorrying onValueChange={changeOnboardEntry} data={onboardingData} />, disabled: onboardingData.unableToStopWorrying ? false : true },
        { component: <LittleInterestOrPleasure onValueChange={changeOnboardEntry} data={onboardingData} />, disabled: onboardingData.littleInterestOrPleasure ? false : true },
        { component: <Depressed onValueChange={changeOnboardEntry} data={onboardingData} />, disabled: onboardingData.depressed ? false : true },
        { component: <PainInjections onValueChange={changeOnboardEntry} data={onboardingData} />, disabled: onboardingData.painInjections ? false : true },
        { component: <SpineSurgery onValueChange={changeOnboardEntry} data={onboardingData} />, disabled: onboardingData.spineSurgery ? false : true }
    ]

    return(
        <SafeView>
            <NavigationBarLeft 
                destination={"Onboard"} 
                navigation={navigation} 
                screen={"Sign Up"} 
                previousPage={step >  0 ? previousStep : null} 
            />
            {pages[step].component}
            <ButtonSection>
                <JournalButton 
                    disabled={pages[step].disabled}
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