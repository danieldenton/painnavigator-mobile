import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeArea } from "../../../../components/safe-area.component";
import { JournalHeader } from "../components/journal-header.component";
import { FoodJournalQuestion } from "../components/pain-journal-question.component";
import { Congratulations } from "../components/congratulations.component";
import { ExitModal } from "../../components/exit-modal.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const NewFoodJournalScreen = ({ navigation }) => {
    const { journalComplete, resetFoodJournal } = useContext(FoodJournalContext);
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
                {journalComplete ? <Congratulations navigation={navigation} /> : <FoodJournalQuestion />}
                <ExitModal 
                    navigation={navigation} 
                    visible={visible} 
                    setVisible={setVisible}
                    resetJournal={resetFoodJournal}
                    destination={"FoodJournal"}
                />
            </Provider>
        </SafeArea>
    );
};