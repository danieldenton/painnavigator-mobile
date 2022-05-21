import React, { useContext } from "react";
import { VideoUnit } from "../components/video-unit.component";
import { TextUnit } from "../components/text-unit.component";
import { EducationContext } from "../../../services/education/education.context";
import { NavigationBarLeft, TextModuleNavBar } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { SkipQuestion } from "../../../components/skip-question.component";
import { StackActions } from '@react-navigation/native';

export const EducationUnitScreen = ({ navigation }) => {
    const { completeModule, currentModule, skipModule } = useContext(EducationContext);
    const { post_video_destination, type, skippable, id } = currentModule;

    const postVideoAction = () => {
        navigation.dispatch(
            StackActions.replace('Why', {
                post_video_destination: post_video_destination,
            })
        );
    };
    
    return (
        <SafeView>
            {type === "video" && <NavigationBarLeft screen={"Education"} destination={"Today"} navigation={navigation} />}
            {type === "video" && <VideoUnit />}
            {type === "text" && <TextModuleNavBar screen={"Education"} destination={"Today"} navigation={navigation} id={id} />}
            {type === "text" && <TextUnit />}
            <ButtonSection>
                <ModuleButton 
                    onPress={() => {
                    {   post_video_destination ?
                        postVideoAction()
                        :
                        navigation.dispatch(StackActions.replace("Completion"))
                    }
                        completeModule();
                    }}
                    title={"Mark Complete"} 
                />
                {skippable && 
                    <SkipQuestion 
                        module={true}
                        onPress={() => 
                            {
                                navigation.dispatch(StackActions.replace("Skipped"));
                                skipModule();
                            }
                        }
                    />
                }
            </ButtonSection>
        </SafeView>
    );
};