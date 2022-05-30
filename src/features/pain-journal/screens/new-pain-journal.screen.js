import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBar } from "../../../components/journals/navigation-bar.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { NewPainJournalEntry } from "../components/new-pain-journal-entry.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const NewPainJournalScreen = ({ navigation }) => {
    const { currentPage, previousPage, resetPainJournal } = useContext(PainJournalContext);
    const [visible, setVisible] = useState(false);

    return(
        <Provider>
            <SafeView>
                <NavigationBar 
                    currentPage={currentPage} 
                    headerName={"PAIN JOURNAL"} 
                    previousPage={previousPage}
                    setVisible={setVisible} 
                />
                <NewPainJournalEntry navigation={navigation} />
                <ExitModal 
                    destination={"Today"}
                    navigation={navigation} 
                    resetJournal={resetPainJournal}
                    setVisible={setVisible}
                    visible={visible} 
                />
            </SafeView>
        </Provider>
    );
};