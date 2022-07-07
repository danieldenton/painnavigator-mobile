import React, { useContext } from "react";
import { IntensitySlider } from "../../../components/slider.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const AvgPainPreStart = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);
    const { starting_pain_score } = onboardingData;

    return (
        <>
            <JournalQuestion 
                question={"Over the last two weeks whats the average amount of pain that you’ve had?"}
                helpText={"0 is no pain, 10 is the worst pain you can imagine"}
            />
            <IntensitySlider 
                value={starting_pain_score} 
                onValueChange={changeOnboardEntry} 
                state={"starting_pain_score"}
            />
        </> 
    );
};