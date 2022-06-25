import React, { useContext, useRef, useState } from "react";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ReviewJournalButton } from "../../../components/button.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { Provider } from 'react-native-paper';
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewPainJournalEntry } from "../components/review-pain-journal-entry.component";
import { SafeView } from "../../../components/safe-area.component";
import { BottomModal } from "../../../components/bottom-sheet/bottom-modal.component";
import { ReviewJournalExitModals } from "../../../components/journals/exit-modals.component";

export const ReviewPainJournalScreen = ({ navigation, route }) => {
    const { journal } = route.params;
    const { cancelEdits, changes, deletePainJournal, saveEdits } = useContext(PainJournalContext);
    const [editing, setEditing] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showExitModal, setShowExitModal] = useState(false);
    const reviewPainJournalOptions = useRef(null);

    const closeModal = () => {
        reviewPainJournalOptions.current?.close();
    };

    const editJournal = () => {
        closeModal();
        setEditing(true);
    };

    const requestDelete = () => {
        closeModal();
        setShowDeleteModal(true);
    };

    const showModal = () => {
        reviewPainJournalOptions.current?.present();
    };

    return(
        <Provider>
            <BottomSheetModalProvider>
                <SafeView>
                    <ReviewJournalNavigationBar 
                        changes={changes}
                        destination={"PainJournalHome"}
                        headerName={"PAIN JOURNAL"} 
                        navigation={navigation} 
                        setVisible={setShowExitModal}
                        showBottomMenu={showModal}
                        resetJournal={cancelEdits}
                    />
                    <ReviewPainJournalEntry editing={editing} journal={journal} />
                    {editing && <ReviewJournalButton navigation={navigation} saveEdits={saveEdits} setEditing={setEditing} type={"PainJournal"}/>}
                    <BottomModal 
                        closeModal={closeModal}
                        destination={"PainJournalHome"}
                        editJournal={editJournal}
                        navigation={navigation}
                        ref={reviewPainJournalOptions}
                        requestDelete={requestDelete}
                    />  
                </SafeView>
            </BottomSheetModalProvider>
            <ReviewJournalExitModals 
                changes={changes}
                cancelEdits={cancelEdits}
                deleteJournal={deletePainJournal} 
                navigation={navigation} 
                showDeleteModal={showDeleteModal} 
                showExitModal={showExitModal}
                setShowDeleteModal={setShowDeleteModal}
                setShowExitModal={setShowExitModal}
                type={"PainJournal"}
            />
        </Provider>
    );
};