import React from "react";
import { ExitModal } from "./exit-modal.component";

export const ReviewJournalExitModals = (props) => {
    const { 
        cancelEdits, 
        changes, 
        deleteJournal, 
        navigation, 
        showExitModal, 
        showDeleteModal, 
        setShowDeleteModal,
        setShowExitModal, 
        type
    } = props;

    return (
        <>
            <ExitModal 
                destination={"JournalDeleted"}
                deleteJournal={deleteJournal}
                navigation={navigation} 
                setVisible={setShowDeleteModal}
                visible={showDeleteModal}
                type={type}
            />
            <ExitModal 
                changes={changes}
                destination={`${type}Home`}
                navigation={navigation} 
                setVisible={setShowExitModal}
                visible={showExitModal}
                resetJournal={cancelEdits}
            />
        </>
    );
};