import React from "react";
import { Button } from "react-native-paper";
import styled from "styled-components";

export const MarkCompleteButton = styled(Button).attrs({
})`
    background-color: blue;
    padding: ${(props) => props.theme.space[2]};
`;