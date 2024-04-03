import React, { useContext } from "react";
import { View } from "react-native";
import { ButtonSection, GraphicWrapper } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestionButton, SkipQuestionText} from "../../../components/skip-question.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader,
    CongratulationsMessageWrapper,
    CongratulationsMessage,
    CongratulationsQuestion
} from "../../../components/completion/completion.styles";
import { CongratsGraphic } from "../../../graphics";
import { Scroll } from "../../../components/scroll.component";
import { OutcomeContext } from "../../../services/outcome.context";
import { AuthenticationContext } from "../../../services/authentication.context";

export const SmartGoalCompletedScreen = ({ navigation }) => {
    const { uid } = useContext(AuthenticationContext)
    const { completeProgram, completedProgram } = useContext(OutcomeContext)

    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} destination={"SmartGoalHome"} navigation={navigation} />
            <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
            <View style={{ marginBottom: 120 }}>
            <GraphicWrapper>
                <CongratsGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>Congratulations!</CongratulationsHeader>
            </CongratulationsHeaderWrapper>
            <CongratulationsMessageWrapper>
                <CongratulationsMessage>
                    You've completed your SMART goal!
                </CongratulationsMessage>
                </CongratulationsMessageWrapper>
                {completedProgram ? <></> : <CongratulationsMessageWrapper>
                <CongratulationsQuestion>
                Do you feel like you're ready to move into the maintenance portion of our program?
                </CongratulationsQuestion>
                </CongratulationsMessageWrapper>}
            
            </View>
            </Scroll>
            {completedProgram ? 
            <ButtonSection>
                <JournalButton onPress={() => {navigation.navigate("Today"), completeProgram(uid)}} title={"Back To Home"} /> 
                </ButtonSection> :
            <ButtonSection>
                <JournalButton onPress={() => {navigation.navigate("Completion"), completeProgram(uid)}} title={"Move into Maintenance"} />
                <SkipQuestionButton
                    onPress={() => {navigation.navigate("Today")}} >
                    <SkipQuestionText>
                        CONTINUE PROGRAM AS IS
                    </SkipQuestionText>
                </SkipQuestionButton>
            </ButtonSection>}
        </SafeView>
    );
};