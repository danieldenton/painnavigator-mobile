import React, { useContext } from "react";

import { EducationUnitInfo } from "./education-unit-info.component";
import { VideoPlayer } from "./video-player.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Button } from "../../../components/button.component";
import { ButtonSection } from "../../education/components/education-unit.styles";
import { EducationContext } from "../../../services/education/education.context";

export const EducationUnit = ({ module_id, name, source, setModuleComplete }) => {
    const { markComplete } = useContext(EducationContext);
    
    return (
        <SafeArea> 
            <VideoPlayer 
                source={source}
            />
            <EducationUnitInfo 
                name={name}
                moduleId={module_id}
            />
            <ButtonSection>
                <Button
                    onPress={() => {markComplete(module_id);}}
                >
                    Mark Complete
                </Button>
            </ButtonSection>
        </SafeArea>
    )
}