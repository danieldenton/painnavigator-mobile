import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const DailyActivitiesCard = styled(Card)`
    margin: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[3]};
`;

const CardContentWrapper = styled(Card.Content)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const DailyActivitiesTile = ({ destination, title, navigation }) => {

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate(destination)}> 
            <DailyActivitiesCard>
                <CardContentWrapper>
                    <Text>{title}</Text>
                    <MaterialCommunityIcons name="pencil-circle-outline" size={36} color="black" />
                </CardContentWrapper>
            </DailyActivitiesCard>
        </TouchableOpacity>
    ); 
};