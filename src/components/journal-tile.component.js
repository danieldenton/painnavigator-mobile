import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

const JournalCard = styled(Card)`
    margin: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[2]};
`;

const CardContentWrapper = styled(Card.Content)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const JournalTile = ({ journal }) => {
    const { date, painScore } = journal;

    return ( 
        <JournalCard>
            <CardContentWrapper>
                <Text>{date}</Text>
                <Text>{`My pain was ${painScore == 8 ? "an" : "a"} ${painScore}`}</Text>
            </CardContentWrapper>
        </JournalCard>
    ); 
};