import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBar } from "../../../components/journals/navigation-bar.component";
import { FoodJournalEntry } from "../components/food-journal-entry.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { FoodJournalContext } from "../../../services/food-journal.context";

export const FoodJournalEntryScreen = ({ navigation, route }) => {
    const { journalId } = route.params;
    const { meal, resetFoodJournal } = useContext(FoodJournalContext);
    const [exitModalVisible, setExitModalVisible] = useState(false);
    
    return(
        <Provider>
            <SafeView>
                <NavigationBar headerName={String(meal)} setVisible={setExitModalVisible} />
                <FoodJournalEntry journalId={journalId} navigation={navigation} /> 
                <ExitModal 
                    navigation={navigation} 
                    visible={exitModalVisible} 
                    setVisible={setExitModalVisible}
                    resetJournal={resetFoodJournal}
                    destination={"FoodJournalHome"}
                />
            </SafeView>
        </Provider>
    );
};