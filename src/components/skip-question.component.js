import styled from "styled-components/native";

export const SkipQuestionButton = styled.TouchableOpacity`
    margin-top: 16px;
`;

export const SkipQuestionText = styled.Text`
    align-self: center;
    font-family: Poppins_600SemiBold;
    font-size: 17px;
`;

export const SkipQuestion = ({ onPress, module, moreThanOneQuestion }) => {
    return(
        <SkipQuestionButton onPress={() => onPress()}>
            <SkipQuestionText>
                {moreThanOneQuestion ?
                "SKIP THESE QUESTIONS" :
                `SKIP THIS ${module ? "MODULE" : "QUESTION"}`}
            </SkipQuestionText>
        </SkipQuestionButton>
    );
};