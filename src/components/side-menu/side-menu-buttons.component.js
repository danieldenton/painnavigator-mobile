import React, { useContext } from "react";
import { MenuButtonsWrapper, MenuButton } from "./side-menu.styles";
import { EducationContext } from "../../services/education/education.context";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { View } from "react-native";
import { JournalMenuIcon, Settings, Units, ProgressMenuIcon, SmartGoalMenuIcon, PainJournalMenuIcon } from "../../icons";

export const MenuButtons = ({ navigation }) => {
    const { currentModule } = useContext(EducationContext);
    const { completedProgram } = useContext(AuthenticationContext)
    const showSmartGoal = currentModule.id > 7 ? true : false;
    const showJournals = currentModule.id > 4 ? true : false;
    const journalDestination = currentModule.id > 24 ? "JournalsNavigator" : "PainJournals";
    const journalLabel = currentModule.id > 24 ? "Journals" : "Pain Journals";

    const menuOptions = [
        {
            id: 1,
            label: "My Progress",
            destination: "Progress",
            icon: <ProgressMenuIcon />,
            show: completedProgram ? false : true
        },
        {
            id: 2,
            label: "Daily Pain Scores",
            destination: "DailyPainScore",
            icon: <PainJournalMenuIcon />,
            show: true
        },
        {
            id: 3,
            label: journalLabel,
            destination: journalDestination,
            icon: <JournalMenuIcon />,
            show: showJournals
        },
        {
            id: 4, 
            label: "Smart Goals",
            destination: "SmartGoals",
            icon: <SmartGoalMenuIcon />,
            show: showSmartGoal
        },
        {
            id: 5,
            label: "Units",
            destination: "Units",
            icon: <Units />,
            show: true
        },
        {
            id: 6,
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