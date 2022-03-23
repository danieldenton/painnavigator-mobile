import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/safe-area.component";
import { Slider } from "../../../components/slider.component";
import { Button } from "../../../components/button.component";
import { JournalContainer, Input } from "../components/pain-journal.styles";

import { painJournalQuestions } from "../data/pain-journal-question-data.json";

import styled from "styled-components/native";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

const ReviewJournalHeader = styled.View`
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    min-height: 64px;
`;

const DateText = styled.Text`
    margin-top: ${(props) => props.theme.space[4]};
    margin-bottom: 33px;
`;

const EditButton = styled(Button)`
    padding: 0px;
`;

const Question = styled.Text`
`;

const Response = styled.Text`
`;

export const ReviewPainJournal = ({ route }) => {
    const { updatePainJournal } = useContext(PainJournalContext);
    const [isEditing, setIsEditing] = useState(false);
    const [journalUpdate, setJournalUpdate] = useState({
        pain_score: 6,
        other_notes: "Yes, yes, yes"
    });
    const { journal, journalId } = route.params;
    const { 
        date, 
        painScore,
        painSetting,
        painFeeling,
        whoWith,
        copingStrategies,
        otherNotes,
        painAfter } = journal;

    return(
        <SafeArea>
            <JournalContainer>
                <ReviewJournalHeader>
                    <DateText>{date}</DateText>
                    {!isEditing && <EditButton onPress={() => setIsEditing(true)}>Edit</EditButton>}
                </ReviewJournalHeader>
                <ScrollView>
                    <Question>{painJournalQuestions[0].question}</Question>
                    {isEditing ? <Slider value={painScore} /> : <Response>{painScore}</Response>}

                    <Question>{painJournalQuestions[1].questions[0].question}</Question>
                    <Input value={painSetting} disabled={!isEditing && true}/>

                    <Question>{painJournalQuestions[1].questions[1].question}</Question>
                    <Input value={painFeeling} disabled={!isEditing && true}/>

                    <Question>{painJournalQuestions[1].questions[2].question}</Question>
                    <Input value={whoWith} disabled={!isEditing && true}/>

                    <Question>{painJournalQuestions[2].question}</Question>
                    <Input value={copingStrategies} disabled={!isEditing && true}/>

                    <Question>{painJournalQuestions[3].question}</Question>
                    <Input value={otherNotes} disabled={!isEditing && true}/>

                    <Question>{painJournalQuestions[4].question}</Question>
                    {isEditing ? <Slider value={painAfter} /> : <Response>{painAfter}</Response>}
                </ScrollView>
                {isEditing && 
                    <Button 
                        onPress={() => {
                            setIsEditing(false);
                            updatePainJournal(journalId, journalUpdate);
                        }}
                    >
                            Save Changes
                    </Button>}
            </JournalContainer>
        </SafeArea>
    );
};