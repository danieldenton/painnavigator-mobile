import React from "react";
import { DrawerContainer, Logo } from "./side-menu.styles";
import { MenuButtons } from "./side-menu-buttons.component";
import { AltMenuButtons } from "./side-menu-alt-buttons.component";
import { SafeAreaView, View } from "react-native";
import { ButtonSection } from "../journals/journal.styles";
import { LinkWrapper } from "../../features/account/components/terms-and-conditions.component";
import styled from "styled-components";

const LinkText = styled.Text`
    font-family: Inter_300Light;
    font-size: 14px;
    color: #4056F4;
`;

export const SideMenu = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#F6F8FB" }}>
            <DrawerContainer>
                <Logo />
                <MenuButtons navigation={navigation} />
                <View style={{ marginTop: 64 }}></View>
                <AltMenuButtons navigation={navigation} />
                <ButtonSection>
                    <LinkWrapper
                        onPress={() => navigation.navigate("Privacy")}
                        style={{ marginLeft: 16 }}
                    >
                        <LinkText>
                            Privacy Policy
                        </LinkText>
                    </LinkWrapper>
                    <LinkWrapper
                        onPress={() => navigation.navigate("Terms")}
                        style={{ marginLeft: 16, marginTop: 12 }}
                    >
                        <LinkText>
                            Terms of Use
                        </LinkText>
                    </LinkWrapper>
                    <LinkWrapper
                        style={{ marginLeft: 16, marginTop: 12 }}
                    >
                        <LinkText
                            style={{ color: "black" }}
                        >
                            PainNavigator Version 0.0.1
                        </LinkText>
                    </LinkWrapper>
                </ButtonSection>
            </DrawerContainer>
        </SafeAreaView>
    );
};