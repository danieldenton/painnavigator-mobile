import React, { useContext } from "react";
import { IntensitySlider } from "../../../components/slider.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { JournalQuestion } from "../../../components/journal-question.component";

export const AvgPainPreStart = () => {
    const { onboardingData, changeOnboardEntry } = useContext(ProfileContext);
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