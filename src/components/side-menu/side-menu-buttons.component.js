import React from "react";
import { menuOptions } from "./side-menu.data";
import { MenuButtonsWrapper, MenuButton } from "./side-menu.styles";

export const MenuButtons = ({ navigation }) => {
    const menuButtons =  menuOptions.map((option, index) => {
        return (
            <MenuButton navigation={navigation} option={option} index={index} key={index} />
        );
    });

    return (
        <MenuButtonsWrapper>
            {menuButtons}
        </MenuButtonsWrapper>
    );
};