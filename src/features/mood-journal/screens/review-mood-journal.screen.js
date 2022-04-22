import React from "react";
import { JournalContainer } from "../../../components/journals/journal.styles";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewMoodJournalEntry } from "../components/review-mood-journal-entry.component";

export const ReviewMoodJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;

    return (
        <JournalContainer>
            <ReviewJournalNavigationBar 
                headerName={"MOOD JOURNAL"} 
                destination={"MoodJournalHome"}
                navigation={navigation}
            />
            <ReviewMoodJournalEntry journal={journal} />
        </JournalContainer>
    );
}; 