import React, { useContext} from "react";
import { QuestionSection, ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const SmartGoalReflection = () => {

    const meaningQuestion = {
        question: "What does it mean for you to complete your SMART goal?",
        helpText: "Did it decrease your negative thoughts? Did you feel good about achieving a realistic goal?"
    }

    const challengesQuestion = {
        question: "Were there any challenges?",
        helpText: "This could include mental, physical, logistical, emotional,"
    }

    return (
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <QuestionSection>
            <JournalQuestion question={meaningQuestion.question} helpText={meaningQuestion.helpText} />
            <TextInputMedium
                value={smartGoal.steps}
                onChangeText={(change) => changeSmartGoal(change, "steps")}   
                accessibilityLabel={"steps-input"}
            />
            <JournalQuestion question={challengesQuestion.question} helpText={challengesQuestion.helpText} />
            <TextInputMedium
                value={smartGoal.reward}
                onChangeText={(change) => changeSmartGoal(change, "reward")}   
                accessibilityLabel={"reward-input"}
            />
            </QuestionSection>
            <ButtonSection>
                <JournalButton 
                    disabled={pages[currentPage].submitCondition ? false : true} 
                    title={"Finish Smart Goal"} 
                    onPress={() => {
                        {currentPage === 1 ?  handleCreateSmartGoal() : handleNextPage()}
                    }}
                />
            </ButtonSection>
        </KeyboardAwareScrollView>
    );
}