import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const Input = styled(TextInput)`
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const JournalContainer = styled.View`
    flex: 1;
    margin: ${(props) => props.theme.space[3]};
`;

export const QuestionSection = styled.View`
    flex: 1;
    width: 100%;
`;

export const ButtonSection = styled.View`
    width: 100%;
    position: absolute;
    bottom: 0;
`;

export const QuestionWrapper = styled.View`
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const QuestionText = styled.Text`
`;

export const HelpText = styled.Text`
`;

export const Question = ({ question, helpText }) => {
    return(
        <QuestionWrapper>
            <QuestionText>{question}</QuestionText>
            {helpText && <HelpText>{helpText}</HelpText>}
        </QuestionWrapper>
    );
};

export const SkipQuestionButton = styled.TouchableOpacity`
    padding: ${(props) => props.theme.space[2]};
`;

export const SkipQuestionText = styled.Text`
    text-decoration: underline;
    align-self: center;
`;

export const SkipQuestion = ({handlePress}) => {
    return(
        <SkipQuestionButton onPress={() => handlePress()}>
            <SkipQuestionText>
                Skip This Question
            </SkipQuestionText>
        </SkipQuestionButton>
    );
};