import React, { useContext } from "react";
import { JournalQuestionAndIntensitySlider } from "../../../components/JournalQuestionAndIntensitySlider";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";


export const AvgPainPreStart = () => {
    const { onboardingData, changeOnboardEntry, setOnboardingData } = useContext(AuthenticationContext);
    const { startingPainScore } = onboardingData;

    return (
        <JournalQuestionAndIntensitySlider
            question={"What number best describes your pain on average in the past week?"}
            helpText={"0 is no pain, 10 is the worst pain you can imagine"}
            value={startingPainScore}
            onValueChange={changeOnboardEntry}
            setState={setOnboardingData}
            state={"startingPainScore"}
        />
    );
};