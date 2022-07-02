import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const Scroll = styled(ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    margin-left: -16px;
    margin-right: -16px;
`;