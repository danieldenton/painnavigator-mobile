import React from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SkipQuestionButton, SkipQuestionText} from "../../../components/skip-question.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader,
    CongratulationsMessage
} from "../../../components/completion/components/completion.styles";

export const MoodJournalUpdatedScreen = ({ navigation }) => {

    return (
        <SafeView>
            <NavigationBarLeft screen={"Mood Journal"} navigation={navigation} destination={"Today"} />
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>
                    Changes Saved!
                </CongratulationsHeader>
                <CongratulationsMessage>
                    You successfully updated your
                </CongratulationsMessage>
                <CongratulationsMessage>
                    Mood Journal.
                </CongratulationsMessage>
            </CongratulationsHeaderWrapper>
            <ButtonSection>
                <JournalButton 
                    title={"Return to Journal"}
                    onPress={() => {navigation.navigate("MoodJournalHome");}}
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