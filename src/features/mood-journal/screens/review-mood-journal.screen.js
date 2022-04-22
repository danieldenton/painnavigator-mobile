import React from "react";
import { JournalContainer } from "../../../components/journals/journal.styles";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { Text, View } from "react-native";

export const ReviewMoodJournalScreen = ({ navigation }) => {
    return (
        <JournalContainer>
            <ReviewJournalNavigationBar 
                headerName={"MOOD JOURNAL"} 
                destination={"MoodJournalHome"}
                navigation={navigation}
            />
            <Text>
                Review Mood Journal Screen
            </Text>
        </JournalContainer>
    )
}; 