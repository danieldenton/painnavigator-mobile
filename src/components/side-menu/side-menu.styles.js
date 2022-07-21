import React from "react";
import styled from "styled-components";

export const DrawerContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: #F6F8FB;
`;

const LogoContainer = styled.View`
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 12px;
    width: 100%;
`;

const LogoImage = styled.Image`
    width: 80%;
    resize-mode: contain;
`;

export const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage source={require('../../../assets/logo_small.png')}/>        
        </LogoContainer>
    );
};

export const MenuButtonsWrapper = styled.View`
    border-bottom-color: hsl(218, 44%, 86%);
    border-bottom-width: .5px;
    margin-left: 16px;
    margin-right: 16px;
`;

const MenuButtonPressable = styled.Pressable`
    align-items: center;
    border-top-color: hsl(218, 44%, 86%);
    border-top-width: .5px;
    flex-direction: row;
    padding-top: 16px;
    padding-bottom: 16px;
`;

const MenuButtonIconSection = styled.View`
    align-items: flex-start;
    flex: .15;
`;

const MenuButtonLabelSection = styled.View`
    align-items: flex-start;
    flex: .75;
`;

const MenuButtonLabel = styled.Text`
    font-family: Inter_400Regular;
    font-size: 18px;
`;

export const MenuButton = ({ navigation, option }) => {
    return (
        <MenuButtonPressable
            onPress={() => {option.handlePress ? option.handlePress() : navigation.navigate(option.destination)}}
        >
            <MenuButtonIconSection>
                {option.icon}
            </MenuButtonIconSection>
            <MenuButtonLabelSection>
                <MenuButtonLabel>
                    {option.label}
                </MenuButtonLabel>
            </MenuButtonLabelSection>
        </MenuButtonPressable>
    );
};