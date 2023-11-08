import React from "react";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { ButtonSection, GraphicWrapper } from "../../../components/journals/journal.styles";
import { SentGraphic } from "../../../graphics";
import { JournalButton } from "../../../components/button.component";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader,
    CongratulationsMessageWrapper,
    CongratulationsMessage
} from "../../../components/completion/completion.styles";

export const MessageSentScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft destination={"Today"} navigation={navigation} screen={"Wellness Coach"}/>
            <GraphicWrapper>
                <SentGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>
                    Message sent!
                </CongratulationsHeader>
                <CongratulationsMessageWrapper>
                    <CongratulationsMessage>
                        Your wellness coach will respond soon!
                    </CongratulationsMessage>
                </CongratulationsMessageWrapper>
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