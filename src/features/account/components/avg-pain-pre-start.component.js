import React, { useContext } from "react";
import { IntensitySlider } from "../../../components/slider.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const AvgPainPreStart = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);
    const { startingPainScore } = onboardingData;

    return (
        <>
            <JournalQuestion 
                question={"What number best describes your pain on average in the past week?"}
                helpText={"0 is no pain, 10 is the worst pain you can imagine"}
            />
            <IntensitySlider 
                value={startingPainScore} 
                onValueChange={changeOnboardEntry} 
                state={"startingPainScore"}
            />
        </> 
    );
};