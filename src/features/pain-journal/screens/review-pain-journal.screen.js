import React, { useCallback, useContext, useMemo, useRef, useState } from "react";
import { BottomSheetBackground } from "../../../components/bottom-sheet/background.component";
import { 
    BottomSheetBackdrop, 
    BottomSheetModal, 
    BottomSheetModalProvider 
} from '@gorhom/bottom-sheet';
import { ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { JournalButton } from "../../../components/button.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { Provider } from 'react-native-paper';
import { ReviewJournalModal } from "../../../components/review-journal-modal.component";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewPainJournalEntry } from "../components/review-pain-journal-entry.component";
import { SafeView } from "../../../components/safe-area.component";

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

    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
    ),[]);

    const requestDelete = () => {
        closeModal();
        setShowDeleteModal(true);
    };

    const snapPoints = useMemo(() => ['35%'], []);

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
                    <QuestionSection>
                        <ReviewPainJournalEntry editing={editing} journal={journal} />
                    </QuestionSection>
                    {editing && 
                        <ButtonSection>
                            <JournalButton 
                                title={"Save Changes"}
                                onPress={() => {
                                    saveEdits(); 
                                    setTimeout(() => {setEditing(false)}, 1000);
                                    navigation.navigate("JournalUpdated", {
                                        type: "PainJournal"
                                    });
                                }}
                            />
                        </ButtonSection>
                    }
                    <BottomSheetModal
                        backdropComponent={renderBackdrop}
                        backgroundComponent={props => <BottomSheetBackground {...props} />}
                        enablePanDownToClose={false}
                        handleComponent={null}
                        index={0}
                        ref={reviewPainJournalOptions}
                        snapPoints={snapPoints}
                    >
                        <ReviewJournalModal 
                            closeModal={closeModal}
                            destination={"PainJournalHome"}
                            editJournal={editJournal} 
                            navigation={navigation}
                            requestDelete={requestDelete}
                        />
                    </BottomSheetModal>
                </SafeView>
            </BottomSheetModalProvider>
            <ExitModal 
                destination={"JournalDeleted"}
                deleteJournal={deletePainJournal}
                navigation={navigation} 
                setVisible={setShowDeleteModal}
                visible={showDeleteModal}
                type={"PainJournal"}
            />
            <ExitModal 
                changes={changes}
                destination={"PainJournalHome"}
                navigation={navigation} 
                setVisible={setShowExitModal}
                visible={showExitModal}
                resetJournal={cancelEdits}
            />
        </Provider>
    );
};