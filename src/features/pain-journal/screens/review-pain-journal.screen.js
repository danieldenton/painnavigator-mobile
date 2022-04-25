import React, { useContext, useCallback, useRef } from "react";
import { BottomModal } from "../../../components/bottom-modal.component";
import { SafeArea } from "../../../components/safe-area.component";
import { JournalButton } from "../../../components/button.component";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { JournalContainer, ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { ReviewPainJournalEntry } from "../components/review-pain-journal-entry.component";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export const ReviewPainJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;
    const { editingPainJournal, setEditingPainJournal, resetPainJournal, updatePainJournal } = useContext(PainJournalContext);

    const reviewPainJournalOptions = useRef(null);

    const handlePresentModalPress = useCallback(() => {
    reviewPainJournalOptions.current?.present();
    }, []);

    return(
        <BottomSheetModalProvider>
            <SafeArea>
                <ReviewJournalNavigationBar 
                    destination={"PainJournalHome"}
                    headerName={"PAIN JOURNAL"} 
                    navigation={navigation} 
                    showBottomMenu={handlePresentModalPress}
                    resetJournal={resetPainJournal}
                />
                <JournalContainer>
                    <QuestionSection>
                        <ReviewPainJournalEntry journal={journal} />
                    </QuestionSection>
                    {editingPainJournal && 
                        <ButtonSection>
                            <JournalButton 
                                title={"Save Changes"}
                                onPress={() => {updatePainJournal(journal.id); setEditingPainJournal(false);}}
                            />
                        </ButtonSection>
                    }
                </JournalContainer>
                <BottomModal ref={reviewPainJournalOptions} />
            </SafeArea>
        </BottomSheetModalProvider>
    );
};