import styled from "styled-components/native";
import { colors } from "../infrastructure/theme/colors";
import { space } from "../infrastructure/theme/spacing";
import { TextInput as Input } from "react-native-paper";

export const TextInput = styled(Input).attrs({
    mode: "outlined",
    activeOutlineColor: colors.textInput.active,
    outlineColor: colors.textInput.inactive
})`
    margin-bottom: ${space[3]};
    font-family: Inter_500Medium;
    font-size: 18px;
`;

export const TextInputMedium = styled(Input).attrs({
    mode: "outlined",
    activeOutlineColor: colors.textInput.active,
    outlineColor: colors.textInput.inactive,
    blurOnSubmit: true,
    multiline: true,
    numberOfLines: 4,
    textAlignVertical: "top",
})`
    margin-bottom: ${space[3]};
    font-family: Inter_500Medium;
    font-size: 18px;
    text-align-vertical: top;
    height: 119;
`;

export const MultilineTextInput = () => {
    return (
        <TextInput 
            blurOnSubmit
            multiline 
            numberOfLines={4}
            textAlignVertical={"top"}
            style={{textAlignVertical: "top", height: 119}}
        />
    );
}; 