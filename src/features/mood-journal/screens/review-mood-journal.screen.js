import React, { useCallback, useContext, useMemo, useRef, useState } from "react";
import { BottomSheetBackground } from "../../../components/bottom-sheet/background.component";
import { 
    BottomSheetBackdrop, 
    BottomSheetModal, 
    BottomSheetModalProvider 
} from '@gorhom/bottom-sheet';
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { ReviewJournalModal } from "../../../components/review-journal-modal.component";
import { ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewMoodJournalEntry } from "../components/review-mood-journal-entry.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { JournalButton } from "../../../components/button.component";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";

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
                    <QuestionSection>
                        <ReviewMoodJournalEntry editing={editing} journal={journal} />
                    </QuestionSection>
                    {editing && 
                        <ButtonSection>
                            <JournalButton 
                                title={"Save Changes"}
                                onPress={() => {
                                    saveEdits(); 
                                    setTimeout(() => {setEditing(false)}, 1000);
                                    navigation.navigate("JournalUpdated", {
                                        type: "Mood"
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
                        ref={reviewMoodJournalOptions}
                        snapPoints={snapPoints}
                    >
                        <ReviewJournalModal 
                            closeModal={closeModal}
                            destination={"MoodJournalHome"}
                            editJournal={editJournal} 
                            navigation={navigation}
                            requestDelete={requestDelete} 
                        />
                    </BottomSheetModal>
                </SafeView>
            </BottomSheetModalProvider>
            <ExitModal 
                destination={"JournalDeleted"}
                deleteJournal={deleteMoodJournal}
                navigation={navigation} 
                setVisible={setShowDeleteModal}
                visible={showDeleteModal}
                type={"Mood"}
            />
            <ExitModal 
                changes={changes}
                destination={"MoodJournalHome"}
                navigation={navigation} 
                setVisible={setShowExitModal}
                visible={showExitModal}
                resetJournal={cancelEdits}
            />
        </Provider>
    );
}; 