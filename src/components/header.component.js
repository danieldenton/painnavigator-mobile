import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { space } from "../infrastructure/theme/spacing";

const HeaderContainer = styled.View`
    padding: ${space[3]};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const LeftSection = styled(TouchableOpacity)`
`;

const HeaderName = styled.Text`
`;

const RightSection = styled(TouchableOpacity)`
`;

export const Header = ({ handleLeftPress, leftIcon, headerName, handleRightPress, rightIcon }) => {
    return(
        <HeaderContainer>
            <LeftSection onPress={handleLeftPress} >
                {leftIcon}
            </LeftSection>
            <HeaderName>
                {headerName}
            </HeaderName>
            <RightSection onPress={handleRightPress} >
                {rightIcon}
            </RightSection>
        </HeaderContainer>
    );
};