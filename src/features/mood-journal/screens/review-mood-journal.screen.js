import React, { useState, useContext, useCallback, useRef } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { ReviewJournalModal } from "../../../components/review-journal-modal.component";
import { JournalContainer, ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewMoodJournalEntry } from "../components/review-mood-journal-entry.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { JournalButton } from "../../../components/button.component";
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { View } from "react-native";
import { Provider } from 'react-native-paper';
import { ExitModal } from "../../../components/journals/exit-modal.component";

export const ReviewMoodJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;
    const { deleteMoodJournal, editingMoodJournal, setEditingMoodJournal, resetMoodJournal, updateMoodJournal } = useContext(MoodJournalContext);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const BottomSheetBackground = ({style}) => {
        return (
            <View
            style={[
                {
                backgroundColor: 'white',
                borderRadius: 15,
                },
                {...style},
            ]}
            />
        );
    };

    const closeModal = () => {
        reviewMoodJournalOptions.current?.close();
    };

    const requestDelete = () => {
        closeModal();
        setShowDeleteModal(true);
    };

    const editJournal = () => {
        closeModal();
        setEditingMoodJournal(true);
    };

    const reviewMoodJournalOptions = useRef(null);

    const showModal = useCallback(() => {
        reviewMoodJournalOptions.current?.present();
    }, []);

    return (
        <Provider>
        <BottomSheetModalProvider>
            <SafeArea>
                <ReviewJournalNavigationBar 
                    destination={"MoodJournalHome"}
                    headerName={"MOOD JOURNAL"} 
                    navigation={navigation}
                    showBottomMenu={showModal}
                    resetJournal={resetMoodJournal}
                />
                <JournalContainer>
                    <QuestionSection>
                        <ReviewMoodJournalEntry journal={journal} />
                    </QuestionSection>
                    {editingMoodJournal && 
                        <ButtonSection>
                            <JournalButton 
                                title={"Save Changes"}
                                onPress={() => {updateMoodJournal(journal.id); setEditingMoodJournal(false);}}
                            />
                        </ButtonSection>
                    }
                </JournalContainer>
                <BottomSheetModal
                    backgroundComponent={props => <BottomSheetBackground {...props} />}
                    enablePanDownToClose={false}
                    handleComponent={null}
                    ref={reviewMoodJournalOptions}
                    snapPoints={['35%']}
                >
                    <ReviewJournalModal 
                        closeModal={closeModal}
                        requestDelete={requestDelete} 
                        destination={"MoodJournalHome"}
                        editJournal={editJournal} 
                        journalId={journal.id}
                        navigation={navigation}
                    />
                </BottomSheetModal>
            </SafeArea>
        </BottomSheetModalProvider>
            <ExitModal 
                deleteJournal={deleteMoodJournal}
                destination={"Today"}
                journalId={journal.id} 
                navigation={navigation} 
                setVisible={setShowDeleteModal}
                visible={showDeleteModal}
            />
        </Provider>
    );
}; 