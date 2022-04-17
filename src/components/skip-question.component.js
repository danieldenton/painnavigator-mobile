import styled from "styled-components/native";
import { space } from "../infrastructure/theme/spacing";

export const SkipQuestionButton = styled.TouchableOpacity`
    margin-top: 16px;
    padding: ${space[2]};
`;

export const SkipQuestionText = styled.Text`
    align-self: center;
    font-size: 16px;
    text-decoration: underline;
`;

export const SkipQuestion = ({ onPress }) => {
    return(
        <SkipQuestionButton onPress={() => onPress()}>
            <SkipQuestionText>
                SKIP THIS QUESTION
            </SkipQuestionText>
        </SkipQuestionButton>
    );
};