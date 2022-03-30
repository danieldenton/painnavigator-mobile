import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const ProgressDotsContainer = styled.View`
    margin: ${(props) => props.theme.space[2]};
    align-items: center;
`;

export const ProgressDots = ({ progress }) => {
    return(
        <ProgressDotsContainer>
            <Text>{progress}</Text>
        </ProgressDotsContainer>
    );
};