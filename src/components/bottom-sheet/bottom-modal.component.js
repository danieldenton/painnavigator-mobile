import React, { forwardRef, useCallback, useMemo } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetBackground } from "./background.component";
import { ReviewJournalModal } from "../review-journal-modal.component";

export const BottomModal = forwardRef((props, ref) => {
    const { closeModal, destination, editJournal, navigation, requestDelete, trackEvent } = props;

    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
    ),[]);
    
    const snapPoints = useMemo(() => ['35%'], []);

    return (
        <BottomSheetModal
            backdropComponent={renderBackdrop}
            backgroundComponent={props => <BottomSheetBackground {...props} />}
            enablePanDownToClose={false}
            handleComponent={null}
            index={0}
            ref={ref}
            snapPoints={snapPoints}
        >
            <ReviewJournalModal 
                closeModal={closeModal}
                destination={destination}
                editJournal={editJournal} 
                trackEvent={trackEvent}
                navigation={navigation}
                requestDelete={requestDelete}
            />
        </BottomSheetModal>
    );
});