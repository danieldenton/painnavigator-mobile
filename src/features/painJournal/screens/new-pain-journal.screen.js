import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeArea } from "../../../components/safe-area.component";
import { JournalHeader } from "../components/journal-header.component";
import { PainJournalQuestion } from "../components/pain-journal-question.component";
import { Congratulations } from "../components/congratulations.component";
import { ExitModal } from "../components/exit-modal.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const NewPainJournalScreen = ({ navigation }) => {
    const { currentQuestion, setCurrentQuestion, journalComplete, resetPainJournal } = useContext(PainJournalContext);
    const [visible, setVisible] = useState(false);

    const previousQuestion = () => {
        setCurrentQuestion((prevQuestion) => { return ( prevQuestion - 1 ) });
    };
    
    return(
        <SafeArea>
            <Provider>
                <JournalHeader 
                    headerName={"PAIN JOURNAL"} 
                    setVisible={setVisible} 
                    currentQuestion={currentQuestion} 
                    previousQuestion={previousQuestion}
                />
                {journalComplete ? <Congratulations navigation={navigation} /> : <PainJournalQuestion />}
                <ExitModal 
                    navigation={navigation} 
                    visible={visible} 
                    setVisible={setVisible}
                    resetJournal={resetPainJournal}
                    destination={"PainJournal"}
                />
            </Provider>
        </SafeArea>
    );
};