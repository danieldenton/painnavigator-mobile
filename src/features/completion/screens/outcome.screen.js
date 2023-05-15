import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Recommend } from "../components/recommend.component";
import { EnjoymentOfLife } from "../../../components/onboard-coutcome/enjoyment-of-life.component";
import { ActivityInterference } from "../../../components/onboard-coutcome/activity-interference.component";
import { Anxious } from "../components/anxious";
import { UnableToStopWorrying } from "../components/unable-to-stop-worrying";
import { LittleInterestOrPleasure } from "../components/little-interest-or-pleasure";
import { Depressed } from "../components/depressed";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component"; 
import { track } from "@amplitude/analytics-react-native";
import { COMPLETION_EVENTS } from "../../../amplitude-events";


export const OutcomeScreen = ({ navigation }) => {
    const { step, previousStep, nextStep, completeProgram, outcomeData, changeOutcomeEntry } = useContext(AuthenticationContext);

    pages = [
        <Recommend />, 
        <EnjoymentOfLife onValueChange={changeOutcomeEntry} data={outcomeData} />, 
        <ActivityInterference onValueChange={changeOutcomeEntry} data={outcomeData} />, 
        <Anxious onValueChange={changeOutcomeEntry} data={outcomeData} />, 
        <UnableToStopWorrying />, 
        <LittleInterestOrPleasure />, 
        <Depressed />
    ]

    const handleCompletProgram = () => {
        completeProgram()
        navigation.navigate("ProgramCompleted")
        track(COMPLETION_EVENTS.COMPLETE_PROGRAM)
    }

    return(
        <SafeView>
            <NavigationBarLeft 
                destination={"Today"} 
                navigation={navigation} 
                screen={"Outcome"} 
                previousPage={step >  0 ? previousStep : null} 
            />
            {pages[step]}
            <ButtonSection>
                <JournalButton 
                    title={"Next"} 
                    onPress={() => {
                        step === 6 ?  handleCompletProgram() : nextStep()
                    }} 
                />
                <ProgressDots progress={step +1} total={7} />
            </ButtonSection>
        </SafeView>
    );
};