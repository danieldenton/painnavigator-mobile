import React from "react";
import styled from "styled-components/native";
import { Edit, Delete } from "../icons";
import { space } from "../infrastructure/theme/spacing";

const OptionButton = styled.TouchableOpacity`
    align-items: center;
    border-top-color: hsl(218, 44%, 86%);
    border-top-width: .5px;
    flex-direction: row;
    margin-left: ${space[3]};
    height: 53px;
`;

const OptionIconSection = styled.View`
    width: 24px;
`;

const OptionText = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
    margin-left: ${space[4]};
`;

export const ReviewJournalModal = ({ deleteJournal, destination, editJournal, journalId, navigation }) => {
    return (
        <>
            <OptionButton
                onPress={() => editJournal(true)}
            >
                <OptionIconSection>
                    <Edit />
                </OptionIconSection>
                <OptionText>Edit</OptionText>
            </OptionButton>
            <OptionButton 
                onPress={() => {deleteJournal(journalId); navigation.navigate(destination)}}
                style={{ borderBottomColor: "hsl(218, 44%, 86%)", borderBottomWidth: .5 }}
            >
                <OptionIconSection>
                    <Delete />
                </OptionIconSection>
                <OptionText>
                    Delete
                </OptionText>
            </OptionButton>
        </>
    );
};