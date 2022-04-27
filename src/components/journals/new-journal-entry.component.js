import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";
import { Add } from "../../icons";

const CardContent = styled(Card.Content)`
    flex-direction: row;
    padding: 0px;
    align-items: center;
`;

const CardTextSection = styled.View`
    flex: .8;
`;

const CardIconSection = styled.View`
    flex: .2;
    align-items: center;
    justify-content: center;
`;

const NewJournalEntryCard = styled(Card)`
    margin-left: ${(props) => props.theme.space[3]};
    margin-right: ${(props) => props.theme.space[3]};
    margin-bottom: 21px;
    padding: 24px 21px;
    border-radius: 15px;
`;

const Title = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
`;

export const NewJournalEntry = ({ title }) => {

    return ( 
        <NewJournalEntryCard>
            <CardContent>
                <CardTextSection>
                    <Title>{title}</Title>
                </CardTextSection>
                <CardIconSection>
                    <Add />
                </CardIconSection>
            </CardContent>
        </NewJournalEntryCard>
    ); 
};