import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { TextInputLarge } from "../../../components/text-input.component";

export const PrimaryThought = () => {
    const { changeEntry, currentPageData, moodJournal } = useContext(MoodJournalContext);
    
    return (
        <>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText} />
            <TextInputLarge
                value={moodJournal.primaryThought}
                onChangeText={(change) => changeEntry(change, currentPageData.state)}    
            />
        </>
    );
}; 