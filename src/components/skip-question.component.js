import styled from "styled-components/native";
import { space } from "../infrastructure/theme/spacing";

export const SkipQuestionButton = styled.TouchableOpacity`
    padding: ${space[2]};
`;

export const SkipQuestionText = styled.Text`
    align-self: center;
    font-family: Poppins_600SemiBold;
    font-size: 16px;
`;

export const SkipQuestion = ({ onPress, module }) => {
    return(
        <SkipQuestionButton onPress={() => onPress()}>
            <SkipQuestionText>
                SKIP THIS {module ? "MODULE" : "QUESTION"}
            </SkipQuestionText>
        </SkipQuestionButton>
    );
};