import React from "react";
import { DrawerContainer, Logo } from "./side-menu.styles";
import { MenuButtons } from "./side-menu-buttons.component";
import { SafeAreaView } from "react-native";

export const SideMenu = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#F6F8FB" }}>
            <DrawerContainer>
                <Logo />
                <MenuButtons navigation={navigation} />
            </DrawerContainer>
        </SafeAreaView>
    );
};