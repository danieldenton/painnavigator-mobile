import React, { useContext, useCallback, useRef } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { ReviewJournalModal } from "../../../components/review-journal-modal.component";
import { JournalContainer, ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewMoodJournalEntry } from "../components/review-mood-journal-entry.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { JournalButton } from "../../../components/button.component";
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export const ReviewMoodJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;
    const { deleteMoodJournal, editingMoodJournal, setEditingMoodJournal, resetMoodJournal, updateMoodJournal } = useContext(MoodJournalContext);

    const reviewMoodJournalOptions = useRef(null);

    const handlePresentModalPress = useCallback(() => {
    reviewMoodJournalOptions.current?.present();
    }, []);

    return (
        <BottomSheetModalProvider>
            <SafeArea>
                <ReviewJournalNavigationBar 
                    destination={"MoodJournalHome"}
                    headerName={"MOOD JOURNAL"} 
                    navigation={navigation}
                    showBottomMenu={handlePresentModalPress}
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
                    index={0}
                    ref={reviewMoodJournalOptions}
                    snapPoints={['35%']}
                >
                    <ReviewJournalModal 
                        deleteJournal={deleteMoodJournal} 
                        editJournal={setEditingMoodJournal} 
                        journalId={journal.id}
                        navigation={navigation}
                    />
                </BottomSheetModal>
            </SafeArea>
        </BottomSheetModalProvider>
    );
}; 