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
                question={"How commited are to redefining your relationship with pain?"}
                helpText={"0 is not commited at all, 10 is you will dedicate yourself to doing whatever you need to do to accomplish your goals"}
            />
            <IntensitySlider 
                value={commitment} 
                onValueChange={changeOnboardEntry} 
                state={"commitment"}
            />
        </> 
    );
};