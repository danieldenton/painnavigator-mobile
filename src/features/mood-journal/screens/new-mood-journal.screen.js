import React, { useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeArea } from "../../../components/safe-area.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { Congratulations } from "../../../components/journals/congratulations.component";
import { MoodJournalEntryPage } from "../components/mood-journal-entry-page.component";
import { Text } from "react-native";

export const NewMoodJournalScreen = () => {
    const { journalComplete } = useContext(MoodJournalContext);

    return (
        <SafeArea>
            {journalComplete ? <Congratulations navigation={navigation} /> : <MoodJournalEntryPage />}
        </SafeArea>
    )
}; 