import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";
import { space } from "../../infrastructure/theme/spacing";
import { ScrollView, View } from "react-native";

// TODO: Change to PageContainer
export const JournalContainer = styled.View`
    flex: 1;
    margin: ${space[3]};
`;

export const JournalScrollContainer = styled.ScrollView`
    flex: 1;
    padding: ${space[3]};
`;

// TODO: Change to EntrySection
export const QuestionSection = styled.View`
    flex: 1;
`;

export const ButtonSection = styled.View`
    flex: 1;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-bottom: 16px;
    background-color: ${colors.bg.secondary};
`;

export const QuestionWrapper = styled.View`
    margin-bottom: ${space[3]};
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

export const Input = styled(TextInput).attrs({
    mode: "outlined",
    numberOfLines: 4,
    outlineColor: colors.ui.inputOutline
})`
    margin-bottom: ${space[3]};
    height: 119px;
`;

export const SkipQuestionButton = styled.TouchableOpacity`
    padding: ${space[2]};
`;

export const SkipQuestionText = styled.Text`
    text-decoration: underline;
    align-self: center;
`;

export const SkipQuestion = ({ handlePress }) => {
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
    margin-top: ${space[4]};
    margin-bottom: 33px;
`;

export const ReviewJournalHeader = ({ date, isEditing, setIsEditing }) => {
    return(
        <HeaderRow>
            <DateText>{date}</DateText>
            {!isEditing && <EditButton onPress={() => setIsEditing(true)}>Edit</EditButton>}
        </HeaderRow>
    );
};

export const GraphicWrapper = styled.View`
    align-items: center;
    margin-top: 48px;
    margin-bottom: 32px;
`;

export const MultiSelectScroll = styled(ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    flex: .85;
    margin-right: -16px;
    padding-right: 16px;
`;