import React from "react";
import { SafeView } from "../safe-area.component";
import { NavigationBarLeft } from "./navigation-bar.component";
import { SkipQuestionButton, SkipQuestionText} from "../skip-question.component";
import { ButtonSection, GraphicWrapper } from "./journal.styles";
import { JournalButton } from "../button.component";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader,
    CongratulationsMessageWrapper,
    CongratulationsMessage
} from "../completion/components/completion.styles";
import { ThumbsUpGraphic } from "../../graphics";

export const Success = ({ deleted, navigation, type }) => {
    const screen = type.replace(/[A-Z]/g, ' $&').trim();

    return (
        <SafeView>
            <NavigationBarLeft screen={screen} navigation={navigation} destination={"Today"} />
            <GraphicWrapper>
                <ThumbsUpGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>
                    {deleted ? `${screen} Deleted` : "Changes Saved!"}
                </CongratulationsHeader>
                {!deleted && <CongratulationsMessageWrapper>
                    <CongratulationsMessage>
                        You successfully updated your {screen}.
                    </CongratulationsMessage>
                </CongratulationsMessageWrapper>}
            </CongratulationsHeaderWrapper>
            <ButtonSection>
                <JournalButton 
                    title={`Return to ${screen}`}
                    onPress={() => {navigation.navigate(`${type}Home`);}}
                />
                <SkipQuestionButton
                    onPress={() => {navigation.navigate("Today")}}
                >
                    <SkipQuestionText>
                        BACK TO DASHBOARD
                    </SkipQuestionText>
                </SkipQuestionButton>
            </ButtonSection>
        </SafeView>
    )
};