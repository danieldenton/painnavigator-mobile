import React, { useContext} from "react";
import { QuestionSection, ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { track } from "@amplitude/analytics-react-native";
import { SMART_GOAL_EVENTS } from "../../../amplitude-events";
import { QuestionAndInput } from "../../../components/question-and-input.component";


export const SmartGoalReflectionComponent = ({ navigation }) => {
    const { reflectGoal, finishGoal, activeGoal } = useContext(SmartGoalContext);
    const { meaning, challenges } = activeGoal

    const questions = [
        {
            question: "What does it mean for you to complete your SMART goal?",
            helpText: "Did it decrease your negative thoughts? Did you feel good about achieving a realistic goal?",
            value: meaning,
            inputString: 1,
            accessibilityLabel: "meaning-input"
        },
        {
            question: "Were there any challenges?",
            helpText: "This could include mental, physical, logistical, emotional, etc...",
            value: challenges,
            inputString: 2,
            accessibilityLabel: "callenges-input"
        }
    ]

    const handleFinishGoal = () => {
        finishGoal() 
        navigation.navigate("SmartGoalCompleted")
    }

    const questionsAndInputs = questions.map((question, idx) => {
            return <QuestionAndInput question={question} input={reflectGoal} key={idx} />
         })

         console.log(activeGoal)

    return (
        <>
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <QuestionSection>
            {questionsAndInputs}
            </QuestionSection>
        </KeyboardAwareScrollView>
        <ButtonSection>
        <JournalButton 
            // disabled={meaning || challenges ? false : true} 
            title={"Finish Smart Goal"} 
            onPress={() => (handleFinishGoal(), track(SMART_GOAL_EVENTS.ENTER_SMART_GOAL_REFLECTION))}
        />
         <SkipQuestion
            onPress={() => (handleFinishGoal(), track(SMART_GOAL_EVENTS.SKIP_SMART_GOAL_REFLECTION))}
        />
    </ButtonSection>
    </>
    );
}