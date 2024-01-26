import styled from "styled-components/native";
import { space } from "../infrastructure/theme/spacing";
import { StyleSheet, Text } from "react-native";
import { isAndroid } from "../utils";

const QuestionWrapper = styled.View`
    margin-bottom: ${space[3]};
    margin-top: 10px;
`;

const QuestionText = styled.Text`
    font-family: Poppins_500Medium;
    font-size: 25px;
    width: 90%;
`;
const styles = StyleSheet.create({
    questionText: {
        fontFamily: "Poppins_500Medium",
        fontSize: isAndroid ? 22 : 25,
        width: 320
    }
})

export const HelpText = styled.Text`
    font-family: Inter_300Light;
    font-style: italic;
    font-size: 14px;
    margin-top: 9px;
    width: 90%;
`;

export const JournalQuestion = ({ question, helpText }) => {
    return(
        <QuestionWrapper>
            <Text style={styles.questionText}>{question}</Text>
            {helpText && <HelpText>{helpText}</HelpText>}
        </QuestionWrapper>
    );
};