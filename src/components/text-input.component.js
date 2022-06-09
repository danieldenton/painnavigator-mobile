import styled from "styled-components/native";
import { colors } from "../infrastructure/theme/colors";
import { space } from "../infrastructure/theme/spacing";
import { TextInput as Input } from "react-native-paper";

export const ReviewTextInput = styled(Input).attrs({
    mode: "outlined",
    activeOutlineColor: colors.textInput.active,
    outlineColor: colors.textInput.inactive
})`
    font-family: Inter_400Regular;
    font-size: 16px;
    height: 42px;
`;

export const InputLabel = styled.Text`
    margin-bottom: 8px;
    font-family: Inter_600SemiBold;
    font-size: 18px;
`;

export const AuthTextInput = styled(Input).attrs({
    mode: "outlined",
    activeOutlineColor: "#16A28B",
    outlineColor: colors.textInput.inactive
})`
    font-family: Inter_400Regular;
    font-size: 16px;
    height: 42px;
    margin-bottom: 16px;
`;

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
    height: 119px;
`;

export const TextInputLarge = styled(Input).attrs({
    mode: "outlined",
    activeOutlineColor: colors.textInput.active,
    outlineColor: colors.textInput.inactive,
    blurOnSubmit: true,
    multiline: true,
    numberOfLines: 6,
    textAlignVertical: "top",
})`
    margin-bottom: ${space[3]};
    font-family: Inter_500Medium;
    font-size: 18px;
    text-align-vertical: top;
    height: 186px;
`;