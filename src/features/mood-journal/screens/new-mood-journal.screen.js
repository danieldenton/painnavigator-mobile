import React, { useContext, useState } from "react";
import { NavigationBar } from "../../../components/journals/navigation-bar.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { Provider } from 'react-native-paper';
import { SafeArea } from "../../../components/safe-area.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { Congratulations } from "../../../components/journals/congratulations.component";
import { NewMoodJournalEntry } from "../components/new-mood-journal-entry.component";

export const NewMoodJournalScreen = ({ navigation }) => {
    const { currentPage, journalComplete, loadMoodJournals, previousPage, resetMoodJournal, setJournalComplete } = useContext(MoodJournalContext);
    const [exitModalVisible, setExitModalVisible] = useState(false);

    return (
        <SafeArea>
            <Provider>
                <NavigationBar 
                    currentPage={currentPage} 
                    headerName={"Mood Journal"} 
                    previousPage={previousPage}
                    setVisible={setExitModalVisible} 
                />
                {journalComplete ? 
                    <Congratulations 
                        journalType={"Mood"} 
                        loadJournals={loadMoodJournals}
                        navigation={navigation}
                        setJournalComplete={setJournalComplete}
                    /> 
                    : 
                    <NewMoodJournalEntry />
                }
                <ExitModal 
                    destination={"Today"}
                    navigation={navigation} 
                    resetJournal={resetMoodJournal}
                    setVisible={setExitModalVisible}
                    visible={exitModalVisible} 
                />
            </Provider>
        </SafeArea>
    )
}; 