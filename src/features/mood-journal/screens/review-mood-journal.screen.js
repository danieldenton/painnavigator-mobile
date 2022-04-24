import React, { useContext, useCallback, useMemo, useRef } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { JournalContainer, ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewMoodJournalEntry } from "../components/review-mood-journal-entry.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { JournalButton } from "../../../components/button.component";
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { View, Text } from "react-native";

export const ReviewMoodJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;
    const { editingMoodJournal, setEditingMoodJournal, resetMoodJournal, updateMoodJournal } = useContext(MoodJournalContext);

    const bottomSheetModalRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['30%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    }, []);

    return (
        <BottomSheetModalProvider>
        <SafeArea>
            <ReviewJournalNavigationBar 
                headerName={"MOOD JOURNAL"} 
                destination={"MoodJournalHome"}
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
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={['30%']}
            >
                <View>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheetModal>
        </SafeArea>
        </BottomSheetModalProvider>
    );
}; 