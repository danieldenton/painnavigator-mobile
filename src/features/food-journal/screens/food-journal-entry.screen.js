import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBar } from "../../../components/journals/navigation-bar.component";
import { FoodJournalEntry } from "../components/food-journal-entry.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { FOOD_JOURNAL_EVENTS } from "../../../amplitude-events";

export const FoodJournalEntryScreen = ({ navigation, route }) => {
    const { journalId } = route.params;
    const { meal, resetFoodJournal } = useContext(FoodJournalContext);
    const [exitModalVisible, setExitModalVisible] = useState(false);
    const [trackExitEvent, setTrackExitEvent] = useState("")

  useEffect(() => {
    if (meal === "Breakfast") {
      setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_BREAKFAST);
    } else if (meal === "Lunch") {
      setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_LUNCH);
    } else if (meal === "Dinner") {
      setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_DINNER);
    } else if (meal === "Snacks") {
      setTrackExitEvent(FOOD_JOURNAL_EVENTS.EXIT_SNACKS);
    }
  }, [meal]);
    
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
                    trackExitEvent={trackExitEvent}
                />
            </SafeView>
        </Provider>
    );
};