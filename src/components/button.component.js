import styled from "styled-components";
import { Button as ReactPaperButton } from "react-native-paper";
import { colors } from "../infrastructure/theme/colors";

export const Button = styled(ReactPaperButton).attrs({
    color: colors.text.white,
})`
    margin-top: 19px;
    border-radius: 8px;
    justify-content: center;
`;

export const JournalButton = ({ disabled, title, onPress, fontSize }) => {
    return (
        <Button 
            contentStyle={{ height: 57 }}
            disabled={disabled}
            labelStyle={{ color: "white", fontSize: fontSize || 18 }}
            onPress={onPress}
            style={{ backgroundColor: disabled ? colors.brand.disabled : colors.brand.primary}}
        >
            {title}
        </Button>
    );
}; 

const OutlineButton = styled(Button).attrs({
    mode: "outlined",
    color: colors.text.primary
})`
    border: 2px ${colors.brand.primary} solid; 
    background-color: ${colors.text.white};
`;

export const JournalButtonOutline = ({title, onPress, fontSize }) => {
    return (
        <OutlineButton 
            contentStyle={{ height: 57 }}
            labelStyle={{ fontSize: fontSize || 18 }}
            onPress={onPress}    
        >
            {title}
        </OutlineButton>
    );
}; 

export const OutlineButtonCondensed = styled(Button).attrs({
    mode: "outlined",
    color: colors.text.primary
})`
    border: 2px ${colors.brand.primary} solid; 
    background-color: ${colors.text.white};
    padding: 0px;
`;

