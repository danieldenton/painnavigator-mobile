import React, { useContext } from "react";
import { PaceSlider } from "../../../components/slider.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { PaceSelectionIndicator, PaceSelectionInfo, ProjectedEndDate } from "./pace.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const ProgramPaceGoal = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);
    const { pace } = onboardingData;

    return(
        <>
            <JournalQuestion 
                question={"How quickly would you like to move through this program?"}
            />
            <PaceSelectionInfo pace={pace}/>
            <ProjectedEndDate pace={pace}/>
            <PaceSelectionIndicator />
            <PaceSlider 
                value={pace} 
                onValueChange={changeOnboardEntry}
                state={"pace"}
                min={0}
                max={2}
                step={1}
            />
        </> 
    );
};