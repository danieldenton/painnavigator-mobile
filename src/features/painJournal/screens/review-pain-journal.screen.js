import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeArea } from "../../../components/safe-area.component";
import { Button } from "../../../components/button.component";
import { JournalContainer } from "../components/pain-journal.styles";

import { painJournalQuestions } from "../data/pain-journal-question-data.json";

import styled from "styled-components/native";

const ReviewJournalHeader = styled.View`
`;

const Question = styled.Text`
`;

const Response = styled.Text`
`;

export const ReviewPainJournal = ({ route }) => {
    const [isEditing, setIsEditing] = useState(false);
    const { item } = route.params;
    const { 
        date, 
        summary, 
        painScore,
        painSetting,
        painFeeling,
        whoWith,
        copingStrategies,
        otherNotes,
        painAfter } = item;

    return(
        <SafeArea>
            <JournalContainer>
                <ReviewJournalHeader>
                    <Text>{date}</Text>
                    <Text>Edit</Text>
                </ReviewJournalHeader>
                <ScrollView>
                    <Question>{painJournalQuestions[0].question}</Question>
                    <Response>{painScore}</Response>
                    <Question>{painJournalQuestions[1].questions[0].question}</Question>
                    <Response>{painSetting}</Response>
                    <Question>{painJournalQuestions[1].questions[1].question}</Question>
                    <Response>{painFeeling}</Response>
                    <Question>{painJournalQuestions[1].questions[2].question}</Question>
                    <Response>{whoWith}</Response>
                </ScrollView>
                {isEditing && <Button>Save Changes</Button>}
            </JournalContainer>
        </SafeArea>
    );
};