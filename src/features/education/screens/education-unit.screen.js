import React, { useContext } from "react";
import { VideoUnit } from "../components/video-unit.component";
import { TextUnit } from "../components/text-unit.component";
import { EducationContext } from "../../../services/education/education.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { SkipQuestion } from "../../../components/skip-question.component";

export const EducationUnitScreen = ({ navigation }) => {
    const { completeModule, currentModule } = useContext(EducationContext);
    const { type, skippable } = currentModule;
    
    return (
        <SafeView>
            <NavigationBarLeft screen={"Education"} destination={"Today"} navigation={navigation} />
            {type === "video" ? <VideoUnit /> : <TextUnit />}
            <ButtonSection>
                <ModuleButton 
                    onPress={() => { navigation.navigate("Completion"); completeModule(); }} 
                    title={"Mark Complete"} 
                />
                {skippable && 
                    <SkipQuestion 
                        module={true}
                        onPress={() => { navigation.navigate("Skipped"); completeModule(); }} 
                    />
                }
            </ButtonSection>
        </SafeView>
    );
};
