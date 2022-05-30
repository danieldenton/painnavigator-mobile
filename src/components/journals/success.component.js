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
    return (
        <SafeView>
            <NavigationBarLeft screen={`${type} Journal`} navigation={navigation} destination={"Today"} />
            <GraphicWrapper>
                <ThumbsUpGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>
                    {deleted ? "Journal Deleted" : "Changes Saved!"}
                </CongratulationsHeader>
                <CongratulationsMessageWrapper>
                    <CongratulationsMessage>
                        You successfully {deleted ? "deleted" : "updated"} your
                    </CongratulationsMessage>
                    <CongratulationsMessage>
                        {type} Journal.
                    </CongratulationsMessage>
                </CongratulationsMessageWrapper>
            </CongratulationsHeaderWrapper>
            <ButtonSection>
                <JournalButton 
                    title={"Return to Journal"}
                    onPress={() => {navigation.navigate(`${type}JournalHome`);}}
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