import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";

export const PrimaryThought = () => {
    const { changeEntry, currentPageData, moodJournal } = useContext(MoodJournalContext);
    
    return (
        <>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText} />
            <TextInput
                blurOnSubmit
                multiline 
                numberOfLines={6}
                value={moodJournal.primaryThought}
                onChangeText={(change) => changeEntry(change, currentPageData.state)}    
                textAlignVertical={"top"}
                style={{textAlignVertical: "top", height: 186}}
            />
        </>
    );
}; 