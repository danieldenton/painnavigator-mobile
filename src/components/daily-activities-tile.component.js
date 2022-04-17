import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const DailyActivitiesCard = styled(Card)`
    border-radius: 15px;
    margin-left: ${(props) => props.theme.space[3]};
    margin-right: ${(props) => props.theme.space[3]};
    margin-top: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[2]};
`;

const TitleText = styled.Text`
    font-size: 18px;
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
                    <TitleText>{title}</TitleText>
                    <MaterialCommunityIcons name="pencil-circle-outline" size={36} color="black" />
                </CardContentWrapper>
            </DailyActivitiesCard>
        </TouchableOpacity>
    ); 
};