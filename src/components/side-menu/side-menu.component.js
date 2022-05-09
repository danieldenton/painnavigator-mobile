import React from "react";
import { DrawerContainer, Logo } from "./side-menu.styles";
import { MenuButtons } from "./side-menu-buttons.component";

export const SideMenu = ({ navigation }) => {
    return (
        <DrawerContainer>
            <Logo />
            <MenuButtons navigation={navigation} />
        </DrawerContainer>
    );
};