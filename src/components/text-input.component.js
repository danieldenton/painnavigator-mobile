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