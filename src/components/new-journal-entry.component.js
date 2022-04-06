import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../infrastructure/theme/colors";

const NewJournalEntryCard = styled(Card)`
    height: 88px;
    margin: ${(props) => props.theme.space[3]};
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
                    <AntDesign name="pluscircleo" size={36} color={colors.brand.primary} />
                </CardContentWrapper>
            </NewJournalEntryCard>
        </TouchableOpacity>
    ); 
};