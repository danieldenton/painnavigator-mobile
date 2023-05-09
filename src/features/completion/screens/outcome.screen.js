import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Recommend } from "../components/recommend.component";
import { OutcomeEnjoyment } from "../components/outcome-enjoyment.component";
import { OutcomeActivity } from "../components/outcome-activity.component";
import { OutcomeAnxious } from "../components/outcomeAnxious";
import { OutcomeUnableToStopWorrying } from "../components/outcomeUnableToStopWorrying";
import { OutcomeLittleInterestOrPleasure } from "../components/outcomeLittleInterestOrPleasure";
import { OutcomeDepressed } from "../components/outcomeDepressed";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component"; 


export const OutcomeScreen = ({ navigation }) => {
    const { step, previousStep, nextStep, completeProgram, outcomeData } = useContext(AuthenticationContext);

    pages = [
        <Recommend />, 
        <OutcomeEnjoyment />, 
        <OutcomeActivity />, 
        <OutcomeAnxious />, 
        <OutcomeUnableToStopWorrying />, 
        <OutcomeLittleInterestOrPleasure />, 
        <OutcomeDepressed />
    ]

    const handleCompletProgram = () => {
        completeProgram()
        navigation.navigate("ProgramCompleted")
    }

    console.log(outcomeData)

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