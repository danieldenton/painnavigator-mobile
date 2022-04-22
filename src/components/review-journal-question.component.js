import React from "react";
import styled from "styled-components/native";
import { colors } from "../infrastructure/theme/colors";
import { space } from "../infrastructure/theme/spacing";
import { Text, View } from "react-native";

const QuestionWrapper = styled.View`
    margin-bottom: ${space[3]};
    margin-top: ${space[3]};
    border-top: .5px hsl(218, 44%, 86%) solid;
    border-botton: .5px hsl(218, 44%, 86%) solid;
    padding-top: ${space[3]};
    padding-bottom: ${space[3]};
`;

const QuestionText = styled.View`
    font-size: 12px;
    color: ${colors.text.secondary};
`;

export const ReviewJournalQuestion = ({ question }) => {
    return (
        <QuestionWrapper>
            <QuestionText>
                {question}
            </QuestionText>
        </QuestionWrapper>
    );
};