import React from "react";
import { Button } from "react-native-paper";
import styled from "styled-components";
import { colors } from "../../../../src/infrastructure/theme/colors";

export const MarkCompleteButton = styled(Button).attrs({
    color: colors.text.inverse,
})`
    background-color: #262626;
    padding: ${(props) => props.theme.space[2]};
    margin: ${(props) => props.theme.space[3]};
`;