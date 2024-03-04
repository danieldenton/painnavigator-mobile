import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";

export const Feeling = () => {
    const { changeEntry, currentPageData, moodJournal } = useContext(MoodJournalContext);

    return (
        <>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText} />
            <TextInput 
                accessibilityLabel={"feeling-input"}
                value={moodJournal.feeling}
                onChangeText={(change) => changeEntry(change, currentPageData.state)}
            />
        </>
    );
};