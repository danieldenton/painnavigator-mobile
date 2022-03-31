import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeArea } from "../../../../components/safe-area.component";
import { NavigationBar } from "../../components/navigation-bar.component";
import { FoodJournalQuestion } from "../components/food-journal-question.component";
import { Congratulations } from "../../components/congratulations.component";
import { ExitModal } from "../../components/exit-modal.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const NewFoodJournalScreen = ({ navigation, route }) => {
    const { title } = route.params;
    const { journalComplete, resetFoodJournal } = useContext(FoodJournalContext);
    const [visible, setVisible] = useState(false);
    
    return(
        <SafeArea>
            <Provider>
                <NavigationBar 
                    headerName={title.toUpperCase()} 
                    setVisible={setVisible} 
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