import React from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft, TextModuleNavBar } from "../../../components/journals/navigation-bar.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { VideoUnit } from "../components/video-unit.component";

export const ReplayUnitScreen = ({ route, navigation }) => {
    const { completeSkippedUnit, moduleType, title, unit } = route.params;
    const { type, id } = unit;

    return (
        <SafeView>
            {type === "video" && <NavigationBarLeft screen={moduleType} destination={`${moduleType}Units`} navigation={navigation} />}
            {type === "text" && <TextModuleNavBar screen={"Education"} destination={"EducationUnits"} navigation={navigation} id={id} />}
            {type === "video" && <VideoUnit unit={unit} />}
            <ButtonSection>
                <ModuleButton 
                    onPress={() => { 
                        navigation.navigate("Today"); 
                        {title === "Skipped" && completeSkippedUnit(id)};
                    }}
                    title={title === "Skipped" ? "Mark Complete" : "Back to Dashboard"} 
                />
            </ButtonSection>
        </SafeView>
    );
};