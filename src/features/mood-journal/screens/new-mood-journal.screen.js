import React, { useContext, useState } from "react";
import { NavigationBar } from "../../../components/journals/navigation-bar.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { MoodJournalContext } from "../../../services/mood-journal.context";
import { NewMoodJournalEntry } from "../components/new-mood-journal-entry.component";
import { MOOD_JOURNAL_EVENTS } from "../../../amplitude-events";

export const NewMoodJournalScreen = ({ navigation }) => {
    const { currentPage, previousPage, resetMoodJournal } = useContext(MoodJournalContext);
    const [visible, setVisible] = useState(false);

    return (
        <Provider>
            <SafeView>
                <NavigationBar 
                    currentPage={currentPage} 
                    headerName={"Mood Journal"} 
                    previousPage={previousPage}
                    setVisible={setVisible} 
                />
                <NewMoodJournalEntry navigation={navigation} />
                <ExitModal 
                    destination={"Today"}
                    navigation={navigation} 
                    resetJournal={resetMoodJournal}
                    setVisible={setVisible}
                    visible={visible} 
                    trackExitEvent={MOOD_JOURNAL_EVENTS.EXIT_MOOD_JOURNAL}
                />
            </SafeView>
        </Provider>
    )
}; 