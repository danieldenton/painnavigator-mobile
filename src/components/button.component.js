import { Button as ReactPaperButton} from "react-native-paper";
import styled from "styled-components";
import { colors } from "../infrastructure/theme/colors";

export const Button = styled(ReactPaperButton).attrs({
    color: colors.text.inverse,
})`
    background-color: #262626;
    padding: ${(props) => props.theme.space[2]};
    margin-top: ${(props) => props.theme.space[3]};
    margin-bottom: ${(props) => props.theme.space[3]};
`;