import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Add, FoodJournalIcon } from "../../icons";

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
    margin-top: 16px;
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
                    {title === "Today's Food Journal" ? <FoodJournalIcon /> :  <Add />}
                </CardIconSection>
            </CardContent>
        </NewJournalEntryCard>
    ); 
};