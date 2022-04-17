import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { Text } from "react-native"; 

export const Feeling = () => {
    const { changeEntry, currentPageData, moodJournalEntry } = useContext(MoodJournalContext);

    return (
        <>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText} />
            <TextInput 
                value={moodJournalEntry.feeling}
                onChangeText={(change) => changeEntry(change, currentPageData.state)}
            />
        </>
    );
}; 