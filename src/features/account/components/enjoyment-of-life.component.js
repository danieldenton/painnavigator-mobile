import React, { useContext } from "react";
import { IntensitySlider } from "../../../components/slider.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const EnjoymentOfLife = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);
    const { enjoymentOfLife } = onboardingData;

    return (
        <>
            <JournalQuestion 
                question={"What number best describes how, during the past week, pain has interfered with your enjoyment of life?"}
                helpText={"0 is no pain, 10 is pain has taken away all enjoyment of life"}
            />
            <IntensitySlider 
                value={enjoymentOfLife} 
                onValueChange={changeOnboardEntry} 
                state={"enjoymentOfLife"}
            />
        </> 
    );
};