import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

import { Entypo } from '@expo/vector-icons';

const ButtonRow = styled.TouchableOpacity`
    flex-direction: row;
    margin: ${(props) => props.theme.space[3]};
    align-items: center;
`;

export const PlayAllButton = ({ navigation }) => {
    return(
        <ButtonRow onPress={() => navigation.navigate("MovementUnit", 
            {
                navigation
            })}
        >
            <Text>Play All</Text>
            <Entypo name="controller-play" size={16} color="black" />
        </ButtonRow>
    );
};