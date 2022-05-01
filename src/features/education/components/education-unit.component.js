import React, { useContext } from "react";
import { EducationUnitInfo } from "./education-unit-info.component";
import { VideoPlayer } from "./video-player.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { EducationContext } from "../../../services/education/education.context";

export const EducationUnit = () => {
    const { markComplete, nextEducationModule } = useContext(EducationContext);
    
    return (
        <> 
            <VideoPlayer 
                source={nextEducationModule.source}
            />
            <EducationUnitInfo 
                id={nextEducationModule.id}
                name={nextEducationModule.name}
            />
            <ButtonSection>
                <ModuleButton 
                    onPress={markComplete} 
                    title={"Mark Complete"} 
                />
            </ButtonSection>
        </>
    )
};