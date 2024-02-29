import React from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft, TextModuleNavBar } from "../../../components/journals/navigation-bar.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { VideoUnit } from "../components/video-unit.component";
import { TextUnit } from "../components/text-unit.component";
import { AudioUnit } from "../components/audio-unit.component";
import { StackActions } from '@react-navigation/native';

export const ReplayUnitScreen = ({ route, navigation }) => {
    const { completeSkippedUnit, moduleType, unit, title } = route.params;
    const { type, id } = unit;

    return (
        <SafeView>
            {type === "video" && <NavigationBarLeft screen={moduleType} destination={`${moduleType}Units`} navigation={navigation} orientation={true} />}
            {type === "video" && <VideoUnit unit={unit} />}
            {type === "audio" && <TextModuleNavBar screen={"Education"} destination={"EducationUnits"} navigation={navigation} id={id} />}
            {type === "audio" && <AudioUnit unit={unit} />}
            {type === "text" && <TextModuleNavBar screen={"Education"} destination={"EducationUnits"} navigation={navigation} id={id} />}
            {type === "text" && <TextUnit unit={unit} />}
            <ButtonSection>
                <ModuleButton 
                    onPress={() => {
                        {   title === "Skipped" ? 
                            (
                                completeSkippedUnit(id),
                                navigation.dispatch(StackActions.replace("UnitCompleted"))
                            )
                            :
                            navigation.navigate("Today"); 
                        } 
                    }}
                    title={title === "Skipped" ? "Mark Complete" : "Back to Dashboard"} 
                />
            </ButtonSection>
        </SafeView>
    );
};