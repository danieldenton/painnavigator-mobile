import React from "react";
import styled from "styled-components/native";

export const AccordionPressableSection = styled.Pressable`
    align-items: center; 
    flex-direction: row;
    justify-content: space-between;
    margin-right: 8px;
`;

export const AccordionTitleSection = styled.View`
`;

export const AccordionTitle = styled.Text`
    font-size: 18px; 
    font-family: "Inter_500Medium";
`;

export const AccordionIconSection = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const AccordionContent = styled.View`
    margin-top: 12px;
    margin-bottom: 6px;
`;

export const UnitButton = styled.TouchableOpacity`
    align-items: center;
    border-bottom-color: hsl(218, 44%, 86%);
    border-bottom-width: .5px;
    border-top-color: hsl(218, 44%, 86%);
    border-top-width: .5px;
    flex-direction: row;
    height: 53px;
    justify-content: space-between;
`;

export const UnitIconSection = styled.View`
    flex-direction: row;
    width: 24px;
    justify-content: flex-end;
    margin-right: 7px;
`;

export const UnitText = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
    margin-left: 8px;
`;

export const Rotated = styled.View`
    transform: rotate(90deg);
`;