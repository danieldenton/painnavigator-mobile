import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NewJournalEntryCard = styled(Card)`
    height: 88px;
    border-radius: 15px;
`;

const CardContentWrapper = styled(Card.Content)`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const NewJournalEntry = ({ title, destination, navigation }) => {

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate(destination)}> 
            <NewJournalEntryCard>
                <CardContentWrapper>
                    <Text>{title}</Text>
                    <MaterialCommunityIcons name="pencil-circle-outline" size={36} color="black" />
                </CardContentWrapper>
            </NewJournalEntryCard>
        </TouchableOpacity>
    ); 
};