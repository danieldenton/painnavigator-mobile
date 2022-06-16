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

export const SmartGoalCompletedScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} destination={"Today"} navigation={navigation} />
            <GraphicWrapper>
                <CongratsGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>Congratulations!</CongratulationsHeader>
            </CongratulationsHeaderWrapper>
            <CongratulationsMessageWrapper>
                <CongratulationsMessage>
                    We’re marking your SMART goal complete as it’s been four weeks!
                </CongratulationsMessage>
                <CongratulationsMessage>
                    Wherever you are, you’ve done a great job. Now, take a moment to refelct on your experience.
                </CongratulationsMessage>
            </CongratulationsMessageWrapper>
            <ButtonSection>
                <ModuleButton onPress={() => navigation.navigate("Today")} title={"Back to Dashboard"} />
            </ButtonSection>
        </SafeView>
    );
};