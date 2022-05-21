import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
 
export const Goal = () => {
    const { changeSmartGoal, smartGoal } = useContext(SmartGoalContext);

    const goalQuestion = {
        question: "What is your goal?",
        helpText: "Pick something small to start! What’s something realistic you could see yourself doing in four weeks? This could be anything from cutting down on soda to walking an hour a week."
    }

    return (
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <JournalQuestion question={goalQuestion.question} helpText={goalQuestion.helpText} />
            <TextInputMedium
                value={smartGoal.goal}
                onChangeText={(change) => changeSmartGoal(change, "goal")}   
                accessibilityLabel={"goal-input"}
            />
        </KeyboardAwareScrollView>
    );
}; 