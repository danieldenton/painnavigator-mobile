import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";

export const Situation = () => {
    const { changeEntry, currentPageData, moodJournalEntry } = useContext(MoodJournalContext);
    
    return (
        <>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText} />
            <TextInput
                blurOnSubmit
                multiline 
                numberOfLines={4}
                value={moodJournalEntry.situation}
                onChangeText={(change) => changeEntry(change, currentPageData.state)}   
                testID={"situation"}
                textAlignVertical={"top"}
                style={{textAlignVertical: "top", height: 119}}
            />
        </>
    );
}; 