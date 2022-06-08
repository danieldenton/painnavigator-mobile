import styled from "styled-components/native";
import { space } from "../infrastructure/theme/spacing";

const QuestionWrapper = styled.View`
    margin-bottom: ${space[3]};
    margin-top: 48px;
`;

const QuestionText = styled.Text`
    font-family: Poppins_500Medium;
    font-size: 25px;
    width: 90%;
`;

const HelpText = styled.Text`
    font-family: Inter_300Light;
    font-style: italic;
    font-size: 14px;
    margin-top: 9px;
    width: 90%;
`;

export const JournalQuestion = ({ question, helpText }) => {
    return(
        <QuestionWrapper>
            <QuestionText>{question}</QuestionText>
            {helpText && <HelpText>{helpText}</HelpText>}
        </QuestionWrapper>
    );
};