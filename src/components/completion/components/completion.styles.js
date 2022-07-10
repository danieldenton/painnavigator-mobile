import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

export const CongratulationsHeaderWrapper = styled.View`
    align-items: center;
    margin-top: 50px; 
    margin-bottom: 32px;
`;

export const CongratulationsHeader = styled.Text`
    font-family: Inter_500Medium;
    font-size: 25px;
`;

export const CongratulationsMessageWrapper = styled.View`
    align-items: center;
    margin-top: 12px; 
    margin-left: 4px;
    margin-right: 4px;
`;

export const CongratulationsMessage = styled(Text).attrs({
    textAlign: "center",
})`
    align-items: center;
    font-family: Inter_400Regular;
    font-size: 18px;
    margin-bottom: 4px;
    line-height: 26px;
`;
