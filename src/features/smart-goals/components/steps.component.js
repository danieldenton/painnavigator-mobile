import React, { useContext } from "react";
import { QuestionAndInput } from "../../../components/question-and-input.component"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { SmartGoalWrapper, SmartGoal } from "./goal.styles";

export const Steps = () => {
    const { changeSmartGoal, smartGoal } = useContext(SmartGoalContext);
    const { goal, steps, reward } = smartGoal
    
    const questions = [{
        question: "What will you do each week to work your way up to your goal?",
        helpText: "For example: I will walk for 30 mins this week, 40 mins next week, 50 mins the week after, and 60 mins the last week.",
        value: steps,
        inputSting: "steps",
        accessibilityLabel: "steps-input"
     },
     {
        question: "What will your reward be?",
        helpText: "Be creative and pick something you really want! This could be a magazine subscription or a dinner out with friends.",
        value: reward,
        inputSting: "reward",
        accessibilityLabel: "reward-input"
     }]

     const questionsAndAnswers = questions.map((question, idx) => {
        return <QuestionAndInput question={question} input={changeSmartGoal} key={idx} />
     })

    return (
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <SmartGoalWrapper>
                <SmartGoal>
                    "{goal}"
                </SmartGoal>
            </SmartGoalWrapper>
            {questionsAndAnswers}
        </KeyboardAwareScrollView>
    );
}; 