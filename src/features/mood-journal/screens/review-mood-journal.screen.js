import React, { useCallback, useContext, useRef, useState } from "react";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewMoodJournalEntry } from "../components/review-mood-journal-entry.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { ReviewJournalButton } from "../../../components/button.component";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { BottomModal } from "../../../components/bottom-sheet/bottom-modal.component";
import { ReviewJournalExitModals } from "../../../components/journals/exit-modals.component";
import { MOOD_JOURNAL_EVENTS } from "../../../amplitude-events";

export const ReviewMoodJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;
    const { cancelEdits, changes, deleteMoodJournal, saveEdits } = useContext(MoodJournalContext);
    const [editing, setEditing] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showExitModal, setShowExitModal] = useState(false);
    const reviewMoodJournalOptions = useRef(null);

    const closeModal = () => {
        reviewMoodJournalOptions.current?.close();
    };

    const editJournal = () => {
        closeModal();
        setEditing(true);
    };

    const requestDelete = () => {
        closeModal();
        setShowDeleteModal(true);
    };

    const showModal = useCallback(() => {
        reviewMoodJournalOptions.current?.present();
    }, []);

    return (
        <Provider>
            <BottomSheetModalProvider>
                <SafeView>
                    <ReviewJournalNavigationBar 
                        changes={changes}
                        destination={"MoodJournalHome"}
                        headerName={"MOOD JOURNAL"} 
                        navigation={navigation}
                        setVisible={setShowExitModal}
                        showBottomMenu={showModal}
                        resetJournal={cancelEdits}
                    />
                    <ReviewMoodJournalEntry editing={editing} journal={journal} />
                    {editing && 
                    <ReviewJournalButton 
                        navigation={navigation} 
                        saveEdits={saveEdits} 
                        setEditing={setEditing} 
                        type={"MoodJournal"}
                        trackEvent={MOOD_JOURNAL_EVENTS.EDIT_MOOD_JOURNAL}
                     />}
                    <BottomModal 
                        closeModal={closeModal}
                        destination={"MoodJournalHome"}
                        editJournal={editJournal}
                        navigation={navigation}
                        ref={reviewMoodJournalOptions}
                        requestDelete={requestDelete}
                    />                      
                </SafeView>
            </BottomSheetModalProvider>
            <ReviewJournalExitModals
                changes={changes}
                cancelEdits={cancelEdits}
                deleteJournal={deleteMoodJournal} 
                trackEvent={MOOD_JOURNAL_EVENTS.DELETE_MOOD_JOURNAL}
                navigation={navigation} 
                showDeleteModal={showDeleteModal} 
                showExitModal={showExitModal}
                setShowDeleteModal={setShowDeleteModal}
                setShowExitModal={setShowExitModal}
                type={"MoodJournal"}
            />
        </Provider>
    );
}; 