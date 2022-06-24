import React from "react";
import { ButtonSection, GraphicWrapper } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader,
    CongratulationsMessageWrapper,
    CongratulationsMessage
} from "../../../components/completion/components/completion.styles";
import { CongratsGraphic } from "../../../graphics";

export const CompletionScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft screen={"Education"} destination={"Today"} navigation={navigation} />
            <GraphicWrapper>
                <CongratsGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>Congratulations!</CongratulationsHeader>
            </CongratulationsHeaderWrapper>
            <CongratulationsMessageWrapper>
                <CongratulationsMessage>
                    You completed an education unit! 
                    You’re on your way to mastering new skills 
                    and redefining your relationship with pain.
                </CongratulationsMessage>
            </CongratulationsMessageWrapper>
            <ButtonSection>
                <ModuleButton onPress={() => navigation.navigate("Today")} title={"Back to Dashboard"} />
            </ButtonSection>
        </SafeView>
    );
};