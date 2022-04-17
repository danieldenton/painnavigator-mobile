import React, { useContext, useState } from "react";
import { NavigationBar } from "../../../components/journals/navigation-bar.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { Provider } from 'react-native-paper';
import { SafeArea } from "../../../components/safe-area.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { Congratulations } from "../../../components/journals/congratulations.component";
import { MoodJournalEntryPage } from "../components/mood-journal-entry-page.component";

export const NewMoodJournalScreen = ({ navigation }) => {
    const { currentPage, journalComplete, loadMoodJournals, previousPage, resetMoodJournal, setJournalComplete } = useContext(MoodJournalContext);
    const [exitModalVisible, setExitModalVisible] = useState(false);

    return (
        <SafeArea>
            <Provider>
                <NavigationBar 
                    currentQuestion={currentPage} 
                    headerName={"Mood Journal"} 
                    setVisible={setExitModalVisible} 
                    previousQuestion={previousPage}
                />
                {journalComplete ? 
                    <Congratulations 
                        journalType={"Mood"} 
                        loadJournals={loadMoodJournals}
                        navigation={navigation}
                        setJournalComplete={setJournalComplete}
                    /> 
                    : 
                    <MoodJournalEntryPage />
                }
                <ExitModal 
                    navigation={navigation} 
                    visible={exitModalVisible} 
                    setVisible={setExitModalVisible}
                    resetJournal={resetMoodJournal}
                    destination={"Today"}
                />
            </Provider>
        </SafeArea>
    )
}; 