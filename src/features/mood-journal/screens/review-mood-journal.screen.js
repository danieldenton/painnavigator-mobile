import React, { useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { JournalContainer, ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewMoodJournalEntry } from "../components/review-mood-journal-entry.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { JournalButton } from "../../../components/button.component";

export const ReviewMoodJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;
    const { editingMoodJournal, setEditingMoodJournal, resetMoodJournal, updateMoodJournal } = useContext(MoodJournalContext);

    return (
        <SafeArea>
            <ReviewJournalNavigationBar 
                headerName={"MOOD JOURNAL"} 
                destination={"MoodJournalHome"}
                navigation={navigation}
                setEditing={setEditingMoodJournal}
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
        </SafeArea>
    );
}; 