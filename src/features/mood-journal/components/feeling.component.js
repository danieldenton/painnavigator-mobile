import React, { useContext } from "react";
import { Text, View } from "react-native";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";

export const Feeling = () => {
    const { currentPageData } = useContext(MoodJournalContext);

    return (
        <>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText} />
            <TextInput />
        </>
    );
}; 