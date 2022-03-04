import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { VideoPlayer } from "./video-player.component";
import { EducationUnitInfo } from "./education-unit-info.component";
import { MarkCompleteButton } from "./mark-complete-button.component";

export const EducationUnit = ({ name, source }) => {
    return (
        <SafeArea> 
            <VideoPlayer 
                source={source}
            />
            < EducationUnitInfo 
                name={name}
            />
            <MarkCompleteButton>
                Mark Complete
            </MarkCompleteButton>
        </SafeArea>
    )
}