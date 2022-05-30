import React, { useContext } from "react";
import { menuOptions } from "./side-menu.data";
import { MenuButtonsWrapper, MenuButton } from "./side-menu.styles";
import { EducationContext } from "../../services/education/education.context";
import { View } from "react-native";

export const MenuButtons = ({ navigation }) => {
    const { educationProgress } = useContext(EducationContext);
    const showSmartGoal = educationProgress > 7 ? true : false;

    const menuButtons = menuOptions.map(option => option.destination === "SmartGoals" ?
        showSmartGoal ?
            <MenuButton 
                navigation={navigation} 
                option={option} 
                key={option.id} 
            />
            :
            <View key={option.id}></View>
        :
        <MenuButton 
            navigation={navigation} 
            option={option} 
            key={option.id} 
        />
    )

    return (
        <MenuButtonsWrapper>
            {menuButtons}
        </MenuButtonsWrapper>
    );
};