import React from "react";
import styled from "styled-components";

export const DrawerContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: #F6F8FB;
    padding-top: 20px;
`;

const LogoContainer = styled.View`
    height: 30px;
`;

const LogoImage = styled.Image`
`;

export const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage>

            </LogoImage>
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

export const MenuButton = ({navigation, option, index}) => {
    return (
        <MenuButtonPressable
            onPress={() => navigation.navigate(option.destination)}
            key={index}
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