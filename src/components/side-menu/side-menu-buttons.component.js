import React, { useContext } from "react";
import { MenuButtonsWrapper, MenuButton } from "./side-menu.styles";
import { EducationContext } from "../../services/education/education.context";
import { View } from "react-native";
import { JournalMenuIcon, Settings, Units, ProgressMenuIcon, SmartGoalMenuIcon } from "../../icons";

export const MenuButtons = ({ navigation }) => {
    const { educationProgress } = useContext(EducationContext);
    const showSmartGoal = educationProgress > 7 ? true : false;

    const menuOptions = [
        {
            id: 1,
            label: "My Progress",
            destination: "Progress",
            icon: <ProgressMenuIcon />,
            show: true
        },
        {
            id: 2,
            label: "Journals",
            destination: "JournalsNavigator",
            icon: <JournalMenuIcon />,
            show: true
        },
        {
            id: 3, 
            label: "Smart Goals",
            destination: "SmartGoals",
            icon: <SmartGoalMenuIcon />,
            show: showSmartGoal
        },
        {
            id: 4,
            label: "Units",
            destination: "Units",
            icon: <Units />,
            show: true
        },
        {
            id: 5,
            label: "Settings",
            destination: "Settings",
            icon: <Settings />,
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