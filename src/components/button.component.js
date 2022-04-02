import styled from "styled-components";
import { Button as ReactPaperButton } from "react-native-paper";
import { colors } from "../infrastructure/theme/colors";

export const Button = styled(ReactPaperButton).attrs({
    color: colors.text.white
})`
    background-color: ${colors.brand.primary};
    margin-top: ${(props) => props.theme.space[3]};
    margin-bottom: ${(props) => props.theme.space[3]};
    height: 57px;
    border-radius: 8px;
    justify-content: center;
`;