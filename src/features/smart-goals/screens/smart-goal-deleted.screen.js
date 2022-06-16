import React from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SkipQuestionButton, SkipQuestionText} from "../../../components/skip-question.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader 
} from "../../../components/completion/components/completion.styles";

export const SmartGoalDeletedScreen = ({ navigation }) => {

    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} navigation={navigation} destination={"Today"} />
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>
                    Goal deleted
                </CongratulationsHeader>
            </CongratulationsHeaderWrapper>
            <ButtonSection>
                <JournalButton 
                    title={"Create a new goal"}
                    onPress={() => {navigation.navigate("NewSmartGoal");}}
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