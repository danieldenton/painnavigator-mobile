import React, { useContext } from "react";
import { IntensitySlider } from "../../../components/slider.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const ActivityInterference = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);
    const { activity_interference } = onboardingData;

    return (
        <>
            <JournalQuestion 
                question={"What number best describes how, during the past week, pain has interfered with your general activity?"}
                helpText={"0 is not commited at all, 10 is pain has made normal activities impossible"}
            />
            <IntensitySlider 
                value={activity_interference} 
                onValueChange={changeOnboardEntry} 
                state={"activity_interference"}
            />
        </> 
    );
};