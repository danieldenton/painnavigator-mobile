import React, { useContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputLarge } from "../../../components/text-input.component";
import { MoodJournalContext } from "../../../services/mood-journal.context";

export const PrimaryThought = () => {
    const { changeEntry, currentPageData, moodJournal } = useContext(MoodJournalContext);
    
    return (
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText} />
            <TextInputLarge
                value={moodJournal.primaryThought}
                onChangeText={(change) => changeEntry(change, currentPageData.state)}    
            />
        </KeyboardAwareScrollView>
    );
}; 