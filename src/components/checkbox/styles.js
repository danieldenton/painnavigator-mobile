import React from "react";
import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";

export const CheckBoxPressableArea = styled.Pressable`
    align-items: center;
    flex-direction: row;
    margin-bottom:  22px;
    margin-left:  2px;
`;

export const CheckCircleArea = styled.View`
    margin-right: 18px;
`;

export const UncheckedCheckCircle = styled.View`
    border: 2px solid ${colors.brand.primary};
    border-radius: 100px;
    height: 36px;
    width: 36px;
`;

export const CheckBoxTextContentArea = styled.View`
    flex: 1;
`;

export const Option = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
    width: 80%;
`;

export const HelpText = styled.Text`
    font-family: Inter_300Light;
    font-size: 14px;
    font-style: italic;
    margin-top: 4px;
    width: 80%;
`;

export const MultiSelectScroll = styled.ScrollView`
    flex: .75;
    margin-right: -16px;
    padding-right: 16px;
`;