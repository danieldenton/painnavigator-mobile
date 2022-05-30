import React from "react";
import styled from "styled-components/native";
import { Next } from "../icons";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const JournalCard = styled(Card)`
    border-radius: 15px;
    margin-top: 12px;
    margin-bottom: 4px;
    margin-left: 16px;
    margin-right: 16px;
`;

const CardContentWrapper = styled(Card.Content)`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 21px;
`;

const JournalTextSection = styled.View`
    flex: .9;
`;

const JournalText = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
`;

export const JournalTile = ({ destination, journal, navigation }) => {
    const { date } = journal;

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate(destination, {
            journal: journal,
        })}> 
            <JournalCard>
                <CardContentWrapper>
                    <JournalTextSection>
                        <JournalText>
                            {date}
                        </JournalText>
                    </JournalTextSection>
                    <Next />
                </CardContentWrapper>
            </JournalCard>
        </TouchableOpacity>
    ); 
};