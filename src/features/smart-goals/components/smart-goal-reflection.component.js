import React, { useContext} from "react";
import { QuestionSection, ButtonSection } from "../../../components/journals/journal.styles";
import { JournalQuestion } from "../../../components/journal-question.component";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { track } from "@amplitude/analytics-react-native";
import { SMART_GOAL_EVENTS } from "../../../amplitude-events";


export const SmartGoalReflectionComponent = ({ navigation }) => {
    const { editGoal, reviewGoal, finishGoal } = useContext(SmartGoalContext);
    const { meaning, challenges } = reviewGoal;

    const questions = [
        {
            question: "What does it mean for you to complete your SMART goal?",
            helpText: "Did it decrease your negative thoughts? Did you feel good about achieving a realistic goal?",
            state: meaning
        },
        {
            question: "Were there any challenges?",
            helpText: "This could include mental, physical, logistical, emotional, etc...",
            state: challenges
        }
    ]

    const handleFinishGoal = () => {
        track(SMART_GOAL_EVENTS.ENTER_SMART_GOAL_REFLECTION)
        finishGoal() 
        navigation.navigate("Today")
    }

    const handleSkipFinishGoalReview = () => {
        track(SMART_GOAL_EVENTS.SKIP_SMART_GOAL_REFLECTION)
        finishGoal()
        navigation.navigate("Today")
    }

    const questionsAndInputs = questions.map((question, idx) => {
        return (<>
        <JournalQuestion question={question.question} helpText={question.helpText} />
            <TextInputMedium
                onChangeText={(change) => editGoal(change, questions.state)}   
                accessibilityLabel={"answer-input"}
            />
            </>)
    })

    return (
        <>
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <QuestionSection>
            {questionsAndInputs}
            </QuestionSection>
        </KeyboardAwareScrollView>
        <ButtonSection>
        <JournalButton 
            // disabled={questions.state ? false : true} 
            title={"Finish Smart Goal"} 
            onPress={() => handleFinishGoal()}
        />
         <SkipQuestion
            onPress={() => handleSkipFinishGoalReview()}
        />
    </ButtonSection>
    </>
    );
}