import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../../../infrastructure/theme/colors";

const NewJournalEntryCard = styled(Card)`
    margin: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[3]};
    border-radius: 15px;
`;

const CardContentWrapper = styled(Card.Content)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const NewJournalEntry = ({ title }) => {

    return ( 
        <NewJournalEntryCard>
            <CardContentWrapper>
                <Text>{title}</Text>
                <AntDesign name="pluscircleo" size={36} color={colors.brand.primary} />
            </CardContentWrapper>
        </NewJournalEntryCard>
    ); 
};