import React, { useState, useContext, useEffect } from "react";
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
    const { journal, journalId } = route.params;
    const { updatePainJournal } = useContext(PainJournalContext);
    const [isEditing, setIsEditing] = useState(false);
    const [painJournal, setPainJournal] = useState(journal);

    const handleChange = (change, name) => {
        setPainJournal(journal => ({
            ...journal,
            [name]: change
        }));
    };

    return(
        <SafeArea>
            <JournalContainer>
                <ReviewJournalHeader>
                    <DateText>{painJournal.date}</DateText>
                    {!isEditing && <EditButton onPress={() => setIsEditing(true)}>Edit</EditButton>}
                </ReviewJournalHeader>
                <ScrollView>
                    <Question>{painJournalQuestions[0].question}</Question>
                    {isEditing ? <Slider value={painJournal.painScore} /> : <Response>{painJournal.painScore}</Response>}

                    <Question>{painJournalQuestions[1].questions[0].question}</Question>
                    <Input 
                        value={painJournal.painSetting} 
                        disabled={!isEditing && true}
                        onChangeText={(change) => handleChange(change, "painSetting")}
                    />

                    <Question>{painJournalQuestions[1].questions[1].question}</Question>
                    <Input 
                        value={painJournal.painFeeling} 
                        disabled={!isEditing && true}
                        onChangeText={(change) => handleChange(change, "painFeeling")}
                    />

                    <Question>{painJournalQuestions[1].questions[2].question}</Question>
                    <Input 
                        value={painJournal.whoWith} 
                        disabled={!isEditing && true} 
                        onChangeText={(change) => handleChange(change, "whoWith")}
                    />

                    <Question>{painJournalQuestions[2].question}</Question>
                    <Input 
                        value={painJournal.copingStrategies} 
                        disabled={!isEditing && true}
                    />

                    <Question>{painJournalQuestions[3].question}</Question>
                    <Input 
                        value={painJournal.otherNotes} 
                        disabled={!isEditing && true}
                        onChangeText={(change) => handleChange(change, "otherNotes")}
                    />

                    <Question>{painJournalQuestions[4].question}</Question>
                    {isEditing ? <Slider value={painJournal.painAfter} /> : <Response>{painJournal.painAfter}</Response>}
                </ScrollView>
                {isEditing && 
                    <Button 
                        onPress={() => {
                            setIsEditing(false);
                            updatePainJournal(journalId, painJournal);
                        }}
                    >
                            Save Changes
                    </Button>}
            </JournalContainer>
        </SafeArea>
    );
};