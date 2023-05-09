import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Recommend } from "../components/recommend.component";
import { OutcomeEnjoyment } from "../components/outcome-enjoyment.component";
import { OutcomeActivity } from "../components/outcome-activity.component";
import { OutcomeMultipleChoice } from "../components/outcome-multiple-choice.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component"; 


export const OutcomeScreen = ({ navigation }) => {
    const { step, previousStep, nextStep, completeProgram } = useContext(AuthenticationContext);

    pages = [<Recommend />, <OutcomeEnjoyment />, <OutcomeActivity />, <OutcomeMultipleChoice step={step} />]

    const handleCompletProgram = () => {
        completeProgram()
        navigation.navigate("ProgramCompleted")
    }

    return(
        <SafeView>
            <NavigationBarLeft 
                destination={"Today"} 
                navigation={navigation} 
                screen={"Outcome"} 
                previousPage={step >  0 ? previousStep : null} 
            />
            {step >= 3 ? pages[3] : pages[step]}
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