import React, { useContext } from "react";

import { SafeArea } from "../../../components/safe-area.component";
import { VideoPlayer } from "./video-player.component";
import { EducationUnitInfo } from "./education-unit-info.component";
import { Button } from "../../../components/button.component";
import { EducationModulesContext } from "../../../services/education/education.context";

export const EducationUnit = ({ module_id, name, source, setModuleComplete }) => {
    const { markComplete } = useContext(EducationModulesContext);
    
    return (
        <SafeArea> 
            <VideoPlayer 
                source={source}
            />
            <EducationUnitInfo 
                name={name}
                moduleId={module_id}
            />
            <Button
                onPress={() => {setModuleComplete(true); markComplete(module_id);}}
            >
                Mark Complete
            </Button>
        </SafeArea>
    )
}