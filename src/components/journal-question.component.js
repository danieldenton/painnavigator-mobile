import styled from "styled-components/native";
import { space } from "../infrastructure/theme/spacing";

const QuestionWrapper = styled.View`
    margin-bottom: ${space[3]};
`;

const QuestionText = styled.Text`
`;

const HelpText = styled.Text`
`;

export const JournalQuestion = ({ question, helpText }) => {
    return(
        <QuestionWrapper>
            <QuestionText>{question}</QuestionText>
            {helpText && <HelpText>{helpText}</HelpText>}
        </QuestionWrapper>
    );
};