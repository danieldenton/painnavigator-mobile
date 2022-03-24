import React, { useState, useContext } from "react";

import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { Provider } from 'react-native-paper';
import { SafeArea } from "../../../components/safe-area.component";
import { JournalHeader } from "../components/journal-header.component";
import { PainJournalQuestion } from "../components/pain-journal-question.component";
import { Congratulations } from "../components/congratulations.component";
import { ExitModal } from "../components/exit-modal.component";

export const NewPainJournalScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const { currentQuestion, previousQuestion, journalComplete, resetPainJournal } = useContext(PainJournalContext);
    
    return(
        <SafeArea>
            <Provider>
                <JournalHeader 
                    headerName={"PAIN JOURNAL"} 
                    showModal={showModal} 
                    currentQuestion={currentQuestion} 
                    previousQuestion={previousQuestion}
                />
                {journalComplete ? <Congratulations navigation={navigation} /> : <PainJournalQuestion />}
                <ExitModal 
                    hideModal={hideModal}
                    navigation={navigation} 
                    resetJournal={resetPainJournal}
                    visible={visible} 
                />
            </Provider>
        </SafeArea>
    );
};