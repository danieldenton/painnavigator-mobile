import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { Button } from "../../../components/button.component";

// TODO: change to InputSecion later on. Input component added to global components folder.
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

export const HeaderRow = styled.View`
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    min-height: 64px;
`;

export const DateText = styled.Text`
    margin-top: ${(props) => props.theme.space[4]};
    margin-bottom: 33px;
`;

export const EditButton = styled(Button)`
    padding: 0px;
`;

export const ReviewJournalHeader = ({ date, isEditing, setIsEditing }) => {
    return(
        <HeaderRow>
            <DateText>{date}</DateText>
            {!isEditing && <EditButton onPress={() => setIsEditing(true)}>Edit</EditButton>}
        </HeaderRow>
    );
};

export const Response = styled.Text`
`;