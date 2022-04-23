import React from "react";
import styled from "styled-components/native";
import { Next } from "../icons";
import { SubHeader } from "./typography.component";
import { Card } from "react-native-paper";

const JournalCard = styled(Card)`
    border-radius: 15px;
    margin-top: 12px;
    margin-left: ${(props) => props.theme.space[3]};
    margin-right: ${(props) => props.theme.space[3]};
`;

const CardContentWrapper = styled(Card.Content)`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-left: -8px;
    padding: 21px;
`;

export const JournalTile = ({ journal }) => {
    const { date } = journal;

    return ( 
        <JournalCard>
            <CardContentWrapper>
                <SubHeader title={date} size={18} />
                <Next />
            </CardContentWrapper>
        </JournalCard>
    ); 
};