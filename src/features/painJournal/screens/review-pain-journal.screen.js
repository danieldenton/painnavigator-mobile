import React, { useState, useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { Provider } from 'react-native-paper';
import { ReviewJournalEntries } from "../components/review-journal-entries.component";
import { Button } from "../../../components/button.component";
import { NavigationBar } from "../../../components/navigation-bar.component";
import { ExitModal } from "../components/exit-modal.component";
import { JournalContainer, ReviewJournalHeader } from "../components/pain-journal.styles";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const ReviewPainJournal = ({ route, navigation }) => {
    const { journal, journalId } = route.params;
    const { updatePainJournal } = useContext(PainJournalContext);
    const [isEditing, setIsEditing] = useState(false);
    const [painJournal, setPainJournal] = useState(journal);
    const [painJournalUpdate, setPainJournalUpdate] = useState(journal);
    const [visible, setVisible] = useState(false);
    const changes = false;

    const handleChange = (change, name) => {
        setPainJournalUpdate(journal => ({
            ...journal,
            [name]: change
        }));
    };

    return(
        <SafeArea>
            <Provider>
                <NavigationBar 
                    headerName={"PAIN JOURNAL"} 
                    setVisible={setVisible} 
                    changes={changes}
                    destination={"PainJournal"}
                    navigation={navigation} 
                />
                <JournalContainer>
                    <ReviewJournalHeader date={painJournal.date} isEditing={isEditing} setIsEditing={setIsEditing} />
                    <ReviewJournalEntries 
                        isEditing={isEditing} 
                        painJournal={painJournal} 
                        painJournalUpdate={painJournalUpdate}
                        handleChange={handleChange}
                    />
                    {isEditing && 
                        <Button 
                            onPress={() => { 
                                setIsEditing(false); 
                                {changes && updatePainJournal(journalId, painJournalUpdate)};
                            }}
                        >
                            Save Changes
                        </Button>}
                </JournalContainer>
                <ExitModal 
                    navigation={navigation} 
                    visible={visible} 
                    setVisible={setVisible}
                    changes={changes}
                    destination={"PainJournal"}
                />
            </Provider>
        </SafeArea>
    );
};