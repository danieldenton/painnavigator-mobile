import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import styled from "styled-components/native";

const SmartGoalWrapper = styled.View`
    align-items: center;
    margin-top: 16px;
`;

const SmartGoal = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
`;
 
export const Steps = () => {
    const { changeSmartGoal, smartGoal } = useContext(SmartGoalContext);
    
    const stepsQuestion = {
        question: "What will you do each week to work your way up to your goal?",
        helpText: "For example: I will walk for 30 mins this week, 40 mins next week, 50 mins the week after, and 60 mins the last week."
    }

    const rewardQuestion = {
        question: "What will your reward be?",
        helpText: "Be creative and pick something you really want! This could be a magazine subscription or a dinner out with friends."
    }

    return (
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <SmartGoalWrapper>
                <SmartGoal>
                    "{smartGoal.goal}"
                </SmartGoal>
            </SmartGoalWrapper>
            <JournalQuestion question={stepsQuestion.question} helpText={stepsQuestion.helpText} />
            <TextInputMedium
                value={smartGoal.steps}
                onChangeText={(change) => changeSmartGoal(change, "steps")}   
                accessibilityLabel={"steps-input"}
            />
            <JournalQuestion question={rewardQuestion.question} helpText={rewardQuestion.helpText} />
            <TextInputMedium
                value={smartGoal.reward}
                onChangeText={(change) => changeSmartGoal(change, "reward")}   
                accessibilityLabel={"reward-input"}
            />
        </KeyboardAwareScrollView>
    );
}; 