import React, { useContext } from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { VideoPlayer } from "./video-player.component";
import { EducationUnitInfo } from "./education-unit-info.component";
import { MarkCompleteButton } from "./mark-complete-button.component";
import { EducationModulesContext } from "../../../services/educationModules/education-modules.context";

export const EducationUnit = ({ name, source }) => {
    
    const { markComplete } = useContext(EducationModulesContext);
    
    return (
        <SafeArea> 
            <VideoPlayer 
                source={source}
            />
            < EducationUnitInfo 
                name={name}
            />
            <MarkCompleteButton
                onPress={markComplete}
            >
                Mark Complete
            </MarkCompleteButton>
        </SafeArea>
    )
}