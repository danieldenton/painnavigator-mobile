import React from "react";
import styled from "styled-components/native";

export const Wrapper = styled.View`
    margin-top: 32px;
    margin-left: 16px;
`;

export const Header = styled.Text`
    font-family: Poppins_500Medium;
    font-size: 25px;
    width: 85%;
`;

export const Body = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
    line-height: 28px;
    width: 95%;
    margin-top: 28px;
`;
export const PainScoreWrapper = styled.View`
    margin-top: 32px;
`;
export const PainGraphWrapper = styled.View`
    margin-top: 32px;
    margin-bottom: 32px;
    align-items: center;
`;

export const PainScoreHeader = styled.Text`
    margin-left: 22px;
    margin-bottom: 16px;
    font-family: Poppins_500Medium;
    font-size: 25px;
    width: 85%;
    text-align: center;
`;

export const PainScoreBody = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
    line-height: 28px;
    width: 95%;
    margin-top: 28px;
    text-align: center;
`;


export const Bolded = styled.Text`
    font-family: Inter_700Bold;
    font-size: 16px;
    line-height: 28px;
`;

export const BodyLine = styled.View`
    flex-direction: row;
    margin-top: 2px;
`;

export const GraphicWrapper = styled.View`
    align-items: center;
    margin-top: 24px;
`;