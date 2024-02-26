import React, { useContext } from "react";
import { MenuButtonsWrapper, MenuButton } from "./side-menu.styles";
import { View } from "react-native";
import { SignOutIcon, Units, ContactIcon } from "../../icons";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const AltMenuButtons = ({ navigation }) => {
    const { signOut } = useContext(AuthenticationContext);

    const menuOptions = [
        {
            id: 1,
            label: "Sign Out",
            handlePress: signOut,
            icon: <SignOutIcon />,
            show: true
        },
        {
            id: 2,
            label: "Contact",
            destination: "Contact",
            icon: <ContactIcon />,
            show: true
        }
    ];

    const menuButtons = menuOptions.map(option => option.show ===  true ?
        <MenuButton navigation={navigation} option={option} key={option.id} />
        :
        <View key={option.id}></View>
    );

    return (
        <MenuButtonsWrapper>
            {menuButtons}
        </MenuButtonsWrapper>
    );
};