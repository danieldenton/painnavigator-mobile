import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { SmartGoalWrapper, SmartGoal } from "./goal.styles";

export const Steps = () => {
    const { changeSmartGoal, smartGoal } = useContext(SmartGoalContext);
    
    const questions = [{
        question: "What will you do each week to work your way up to your goal?",
        helpText: "For example: I will walk for 30 mins this week, 40 mins next week, 50 mins the week after, and 60 mins the last week."
     },
     {
        question: "What will your reward be?",
        helpText: "Be creative and pick something you really want! This could be a magazine subscription or a dinner out with friends."
     }]

     const questionsAndAnswers = questions.map((question, idx) => {
        const values = [smartGoal.steps, smartGoal.reward]
        const inputStrings = ["steps", "reward"]
        const accessibilityLabels = ["steps-input", "reward-input"]
        return (
            <>
            <JournalQuestion question={question.question} helpText={question.helpText} />
            <TextInputMedium
                value={values[idx]}
                onChangeText={(change) => changeSmartGoal(change, inputStrings[idx])}   
                accessibilityLabel={accessibilityLabels[idx]}
            />
            </>
        )
     })

    return (
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <SmartGoalWrapper>
                <SmartGoal>
                    "{smartGoal.goal}"
                </SmartGoal>
            </SmartGoalWrapper>
            {questionsAndAnswers}
        </KeyboardAwareScrollView>
    );
}; 