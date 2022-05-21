import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";

export const GoalWrapper = styled.View`
    margin-bottom: 16px;
`;

export const UpdateWrapper = styled.View`
    flex: 1;
    margin-right: -16px; 
    margin-top: 8px;
    margin-bottom: 120px;
    padding-right: 16px;
`;

export const KeyboardView = styled(KeyboardAwareScrollView)`
    margin-left: -16px;
    margin-right: -16px;
    padding-right: 16px; 
    padding-left: 16px; 
`; 
