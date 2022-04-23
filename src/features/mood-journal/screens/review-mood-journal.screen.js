import React, { useContext } from "react";
import { JournalContainer, ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewMoodJournalEntry } from "../components/review-mood-journal-entry.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { JournalButton } from "../../../components/button.component";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const ReviewMoodJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;
    const { editingMoodJournal, setEditingMoodJournal, resetMoodJournal } = useContext(MoodJournalContext);

    return (
        <JournalContainer>
            <ReviewJournalNavigationBar 
                headerName={"MOOD JOURNAL"} 
                destination={"MoodJournalHome"}
                navigation={navigation}
                setEditing={setEditingMoodJournal}
                resetJournal={resetMoodJournal}
            />
            <QuestionSection>
                <ReviewMoodJournalEntry journal={journal} />
            </QuestionSection>
            {editingMoodJournal && <ButtonSection><JournalButton title={"Save Changes"}/></ButtonSection>}
        </JournalContainer>
    );
}; 