import React, { useState, useContext } from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { VideoPlayer } from "./video-player.component";
import { EducationUnitInfo } from "./education-unit-info.component";
import { Button } from "../../../components/button/button.component";
import { EducationModulesContext } from "../../../services/educationModules/education-modules.context";

export const EducationUnit = ({ module_id, name, source, setModuleComplete }) => {
    
    const { markComplete } = useContext(EducationModulesContext);
    
    return (
        <SafeArea> 
            <VideoPlayer 
                source={source}
            />
            < EducationUnitInfo 
                name={name}
            />
            <Button
                onPress={() => {setModuleComplete(true); markComplete(module_id);}}
            >
                Mark Complete
            </Button>
        </SafeArea>
    )
}