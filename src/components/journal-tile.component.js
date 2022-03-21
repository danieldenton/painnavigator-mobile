import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

const DailyActivitiesCard = styled(Card)`
    margin: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[2]};
`;

const CardContentWrapper = styled(Card.Content)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const JournalTile = ({ date, destination, summary, navigation, journalData }) => {

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate(destination, {
            journalData,
        })}> 
            <DailyActivitiesCard>
                <CardContentWrapper>
                    <Text>{date}</Text>
                    <Text>{summary}</Text>
                </CardContentWrapper>
            </DailyActivitiesCard>
        </TouchableOpacity>
    ); 
};