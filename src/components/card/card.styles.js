import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const CardWrapper = styled(Card)`
    border-radius: 15px;
    margin-top: 12px;
`;

export const CardContentWrapper = styled(Card.Content)`
    padding: 21px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextSection = styled.View`
`;

export const CardText = styled.Text`
    font-family: Inter_500Medium;
    font-size: 16px;
`;

export const IconSection = styled.View`
`;
