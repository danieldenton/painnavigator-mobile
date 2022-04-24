import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeArea } from "../../../components/safe-area.component";
import { NavigationBar } from "../../../components/journals/navigation-bar.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { NewPainJournalEntry } from "../components/new-pain-journal-entry.component";
import { Congratulations } from "../../../components/journals/congratulations.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const NewPainJournalScreen = ({ navigation }) => {
    const { currentPage, journalComplete, previousPage, resetPainJournal, setJournalComplete } = useContext(PainJournalContext);
    const [visible, setVisible] = useState(false);

    return(
        <SafeArea>
            <Provider>
                <NavigationBar 
                    headerName={"PAIN JOURNAL"} 
                    setVisible={setVisible} 
                    currentPage={currentPage} 
                    previousPage={previousPage}
                />
                {journalComplete ? 
                    <Congratulations
                        journalType={"Pain"} 
                        navigation={navigation} 
                        setJournalComplete={setJournalComplete}
                    /> 
                    : 
                    <NewPainJournalEntry />
                }
                <ExitModal 
                    destination={"Today"}
                    navigation={navigation} 
                    resetJournal={resetPainJournal}
                    setVisible={setVisible}
                    visible={visible} 
                />
            </Provider>
        </SafeArea>
    );
};