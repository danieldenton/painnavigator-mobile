import React from "react";
import { DrawerContainer, Logo } from "./side-menu.styles";
import { MenuButtons } from "./side-menu-buttons.component";
import { AltMenuButtons } from "./side-menu-alt-buttons.component";
import { SafeAreaView, View } from "react-native";
import { CompanyLinks } from "./side-menu-company-links.component";

export const SideMenu = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#F6F8FB" }}>
            <DrawerContainer>
                <Logo />
                <MenuButtons navigation={navigation} />
                <View style={{ marginTop: 64 }}></View>
                <AltMenuButtons navigation={navigation} />
                <CompanyLinks navigation={navigation} />
            </DrawerContainer>
        </SafeAreaView>
    );
};