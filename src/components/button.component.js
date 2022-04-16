import styled from "styled-components";
import { Button as ReactPaperButton } from "react-native-paper";
import { colors } from "../infrastructure/theme/colors";

export const Button = styled(ReactPaperButton).attrs({
    color: colors.text.white,
})`
    background-color: ${colors.brand.primary};
    margin-top: ${(props) => props.theme.space[4]};
    margin-bottom: ${(props) => props.theme.space[4]};
    border-radius: 8px;
    justify-content: center;
`;

export const JournalButton = ({title, onPress}) => {
    return (
        <Button 
            contentStyle={{ height: 57 }}
            labelStyle={{ color: "white", fontSize: 18 }}
            onPress={onPress}    
        >
            {title}
        </Button>
    );
}; 

export const OutlineButton = styled(Button).attrs({
    mode: "outlined",
    color: colors.text.primary
})`
    border: 2px ${colors.brand.primary} solid; 
    background-color: ${colors.text.white};
`;

export const OutlineButtonCondensed = styled(Button).attrs({
    mode: "outlined",
    color: colors.text.primary
})`
    border: 2px ${colors.brand.primary} solid; 
    background-color: ${colors.text.white};
    padding: 0px;
`;

