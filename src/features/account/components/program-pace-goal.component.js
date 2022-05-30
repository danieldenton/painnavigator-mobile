import React, { useContext } from "react";
import { PaceSlider } from "../../../components/slider.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { JournalQuestion } from "../../../components/journal-question.component";
import { PaceSelectionIndicator, PaceSelectionInfo, ProjectedEndDate } from "./pace.styles";

export const ProgramPaceGoal = () => {
    const { programPaceGoal, setProgramPaceGoal } = useContext(ProfileContext);

    return(
        <>
            <JournalQuestion 
                question={"How quickly would you like to move through this program?"}
            />
            <PaceSelectionIndicator />
            <PaceSlider 
                value={programPaceGoal} 
                onValueChange={setProgramPaceGoal}
                min={0}
                max={2}
                step={1}
            />
            <PaceSelectionInfo pace={programPaceGoal}/>
            <ProjectedEndDate pace={programPaceGoal}/>
        </> 
    );
};