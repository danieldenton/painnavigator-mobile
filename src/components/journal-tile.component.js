import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { Entypo } from '@expo/vector-icons';

const JournalCard = styled(Card)`
    margin: ${(props) => props.theme.space[3]};
    padding-left: ${(props) => props.theme.space[2]};
    padding-right: ${(props) => props.theme.space[2]};
    height: 62px;
    border-radius: 15px;
`;

const CardContentWrapper = styled(Card.Content)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const JournalTile = ({ journal }) => {
    const { date } = journal;

    return ( 
        <JournalCard>
            <CardContentWrapper>
                <Text>{date}</Text>
                <Entypo name="chevron-small-right" size={32} color="black" />
            </CardContentWrapper>
        </JournalCard>
    ); 
};