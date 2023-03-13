import React, { useContext} from "react";
import { QuestionSection } from "../../../components/journals/journal.styles";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";


export const SmartGoalReflectionComponent = () => {
    const { createSmartGoal, currentPage, smartGoal, nextPage } = useContext(SmartGoalContext);
    const { goal, steps, reward } = smartGoal;

    const questions = [
        {
            question: "What does it mean for you to complete your SMART goal?",
            helpText: "Did it decrease your negative thoughts? Did you feel good about achieving a realistic goal?"
        },
        {
            question: "Were there any challenges?",
            helpText: "This could include mental, physical, logistical, emotional, etc..."
        }
    ]

    const questionsAndInputs = questions.map((question) => {
        return (<>
        <JournalQuestion question={question.question} helpText={question.helpText} />
            <TextInputMedium
                value={smartGoal.steps}
                onChangeText={(change) => changeSmartGoal(change, "steps")}   
                accessibilityLabel={"answer-input"}
            />
            </>)
    })

    return (
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <QuestionSection>
            {questionsAndInputs}
            </QuestionSection>
        </KeyboardAwareScrollView>
    );
}