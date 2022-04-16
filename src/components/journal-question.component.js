import styled from "styled-components/native";
import { space } from "../infrastructure/theme/spacing";

const QuestionWrapper = styled.View`
    margin-bottom: ${space[3]};
`;

const QuestionText = styled.Text`
    font-size: 25px;
`;

const HelpText = styled.Text`
    font-size: 14px;
    font-style: italic;
    margin-top: 9px;
`;

export const JournalQuestion = ({ question, helpText }) => {
    return(
        <QuestionWrapper>
            <QuestionText>{question}</QuestionText>
            {helpText && <HelpText>{helpText}</HelpText>}
        </QuestionWrapper>
    );
};