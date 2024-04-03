import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { MoodJournalContext } from "../../../services/mood-journal.context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Situation = () => {
    const { changeEntry, currentPageData, moodJournal } = useContext(MoodJournalContext);
    const { questions } = currentPageData;
    const situationQuestion = questions[0];
    const whoIWasWithQuestion = questions[1];
    
    return (
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <JournalQuestion question={situationQuestion.question} helpText={situationQuestion.helpText} />
            <TextInputMedium
                value={moodJournal.situation}
                onChangeText={(change) => changeEntry(change, situationQuestion.state)}   
                testID={situationQuestion.state}
            />
            <JournalQuestion question={whoIWasWithQuestion.question} helpText={whoIWasWithQuestion.helpText} />
            <TextInputMedium
                value={moodJournal.whoIWasWith}
                onChangeText={(change) => changeEntry(change, whoIWasWithQuestion.state)}   
                testID={whoIWasWithQuestion.state}
            />
        </KeyboardAwareScrollView>
    );
}; 