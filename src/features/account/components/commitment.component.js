import React, { useContext } from "react";
import { IntensitySlider } from "../../../components/slider.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const Commitment = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);
    const { commitment } = onboardingData;

    return (
        <>
            <JournalQuestion 
                question={"What number best describes how, during the past week, pain has interfered with your general activity?"}
                helpText={"0 is not commited at all, 10 is pain has made normal activities impossible"}
            />
            <IntensitySlider 
                value={commitment} 
                onValueChange={changeOnboardEntry} 
                state={"commitment"}
            />
        </> 
    );
};