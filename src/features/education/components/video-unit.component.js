import React, { useContext } from "react";
import { EducationUnitInfo } from "./education-unit-info.component";
import { VideoPlayer } from "./video-player.component";
import { EducationContext } from "../../../services/education/education.context";

export const VideoUnit = () => {
    const { currentModule } = useContext(EducationContext);
    const { source, id, name } = currentModule;
    
    return (
        <> 
            <VideoPlayer source={source} />
            <EducationUnitInfo id={id} name={name} />
        </>
    )
};