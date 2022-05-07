import React, { useContext } from "react";
import { VideoUnit } from "../components/video-unit.component";
import { TextUnit } from "../components/text-unit.component";
import { EducationContext } from "../../../services/education/education.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";

export const EducationUnitScreen = ({ route }) => {
    const { navigation } = route.params;
    const { completeModule, currentModule } = useContext(EducationContext);
    
    return (
        <SafeView>
            <NavigationBarLeft screen={"Education"} destination={"Today"} navigation={navigation} />
            {currentModule.type === "video" ? <VideoUnit /> : <TextUnit />}
            <ButtonSection>
                <ModuleButton 
                    onPress={() => { completeModule(); navigation.navigate("Completion")}} 
                    title={"Mark Complete"} 
                />
            </ButtonSection>
        </SafeView>
    );
};
