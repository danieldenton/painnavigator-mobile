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
} from "../../../components/completion/components/completion.styles";

export const SentScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft destination={"Today"} navigation={navigation} screen={"Contact Us"}/>
            <GraphicWrapper>
                <SentGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>
                    Email sent!
                </CongratulationsHeader>
                <CongratulationsMessageWrapper>
                    <CongratulationsMessage>
                        Someone from our team will respond soon!
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