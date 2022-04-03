import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeArea } from "../../../../components/safe-area.component";
import { NavigationBar } from "../../components/navigation-bar.component";
import { AddMealEntry } from "../components/add-meal-entry.component";
import { Congratulations } from "../../components/congratulations.component";
import { ExitModal } from "../../components/exit-modal.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const AddMealScreen = ({ navigation, route }) => {
    const { journalId } = route.params;
    const { meal, journalComplete, loadFoodJournals, resetFoodJournal, setJournalComplete } = useContext(FoodJournalContext);
    const [exitModalVisible, setExitModalVisible] = useState(false);
    
    return(
        <SafeArea>
            <Provider>
                <NavigationBar 
                    headerName={meal.toUpperCase()} 
                    setVisible={setExitModalVisible} 
                />
                {journalComplete ? (
                    <Congratulations 
                        navigation={navigation} 
                        loadJournals={loadFoodJournals}
                        setJournalComplete={setJournalComplete}
                    /> 
                    ) : (
                    <AddMealEntry journalId={journalId} /> 
                    )
                }
                <ExitModal 
                    navigation={navigation} 
                    visible={exitModalVisible} 
                    setVisible={setExitModalVisible}
                    resetJournal={resetFoodJournal}
                    destination={"FoodJournal"}
                />
            </Provider>
        </SafeArea>
    );
};