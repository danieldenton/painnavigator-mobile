import styled from "styled-components/native";
import { Button as ReactPaperButton } from "react-native-paper";
import { colors } from "../infrastructure/theme/colors";

export const Button = styled(ReactPaperButton).attrs({
    color: colors.text.white,
})`
    margin-top: 8px;
    border-radius: 8px;
    justify-content: center;
`;

export const ModuleButton = ({ onPress, title }) => {
    return (
        <Button 
            contentStyle={{ height: 57 }}
            labelStyle={{ color: "white", fontSize: 18, fontFamily: "Poppins_600SemiBold" }}
            onPress={onPress}
            style={{ backgroundColor: colors.brand.primary, marginBottom: 16 }}
        >
            {title}
        </Button>
    );
}; 

export const JournalButton = ({ disabled, title, onPress, fontSize }) => {
    return (
        <Button 
            contentStyle={{ height: 57 }}
            disabled={disabled}
            labelStyle={{ color: "white", fontSize: fontSize || 18, fontFamily: "Poppins_600SemiBold" }}
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
            labelStyle={{ fontSize: fontSize || 18, fontFamily: "Poppins_600SemiBold" }}
            onPress={onPress}    
        >
            {title}
        </OutlineButton>
    );
}; 
