import React from "react";
import { ButtonSection, GraphicWrapper } from "./journal.styles";
import { JournalButton } from "../button.component";
import { NavigationBarLeft } from "./navigation-bar.component";
import { SafeView } from "../safe-area.component";
import { ThumbsUpGraphic } from "../../graphics";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader,
    CongratulationsMessageWrapper,
    CongratulationsMessage
} from "../completion/components/completion.styles";

export const JournalCreatedScreen = ({ navigation, route }) => {
    const { type } = route.params;
    const journalCount = 0;

    return(
        <SafeView>
            <NavigationBarLeft destination={"Today"} navigation={navigation} screen={type}/>
            <GraphicWrapper>
                <ThumbsUpGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper>
                {type === "Profile" ?
                    <>
                        <CongratulationsHeader>Nice Work!</CongratulationsHeader>
                        <CongratulationsMessageWrapper>
                            <CongratulationsMessage>You finished setting up your profile</CongratulationsMessage>
                        </CongratulationsMessageWrapper>
                    </> 
                :
                    <>
                        <CongratulationsHeader>Congratulations!</CongratulationsHeader>
                        <CongratulationsMessageWrapper>
                            <CongratulationsMessage style={{ marginTop: 16 }}>You {journalCount > 0 ? "logged a" : "finished your first"} {type} Journal.</CongratulationsMessage>
                            <CongratulationsMessage>Keep up the hard work!</CongratulationsMessage>
                        </CongratulationsMessageWrapper>
                    </>
                }
            </CongratulationsHeaderWrapper>
            <ButtonSection>
                <JournalButton 
                    onPress={() => {
                        navigation.navigate("Today"); 
                    }}
                    title={"RETURN HOME"}
                />
            </ButtonSection>
        </SafeView>
    );
};