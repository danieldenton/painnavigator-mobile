import React, { useContext } from "react";
import { menuOptions } from "./side-menu.data";
import { MenuButtonsWrapper, MenuButton } from "./side-menu.styles";
import { EducationContext } from "../../services/education/education.context";

export const MenuButtons = ({ navigation }) => {
    const { educationProgress } = useContext(EducationContext);
    const menuButtons =  menuOptions.map((option, index) => {
        return (
            <>
                {option.destination !== "SmartGoals" ? 
                    <MenuButton navigation={navigation} option={option} key={option.id} />
                    :
                    educationProgress > 7 ? 
                        <MenuButton navigation={navigation} option={option} key={option.id} />
                        :
                        <></>
                }
            </>
        );
    });

    return (
        <MenuButtonsWrapper>
            {menuButtons}
        </MenuButtonsWrapper>
    );
};