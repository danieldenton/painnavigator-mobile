import React, { useContext } from "react";
import { QuestionAndInput } from "../../../components/question-and-input.component";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
 
export const Goal = () => {
    const { changeSmartGoal, smartGoal } = useContext(SmartGoalContext);
    const { goal } = smartGoal

    const question = {
        question: "What is your goal?",
        helpText: "Pick something small to start! What’s something realistic you could see yourself doing in four weeks? This could be anything from cutting down on soda to walking an hour a week.",
        value: goal,
        inputSting: "goal",
        accessibilityLabel: "goal-input"
    }

    return (
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <QuestionAndInput question={question} input={changeSmartGoal}/>
        </KeyboardAwareScrollView>
    );
}; 