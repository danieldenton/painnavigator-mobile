import React from "react";
import { JournalMenuIcon, Settings, Units, ProgressMenuIcon, SmartGoalMenuIcon } from "../../icons";

export const menuOptions = [
    {
        id: 1,
        label: "My Progress",
        destination: "Progress",
        icon: <ProgressMenuIcon />
    },
    {
        id: 2,
        label: "Journals",
        destination: "JournalsNavigator",
        icon: <JournalMenuIcon />
    },
    {
        id: 3, 
        label: "Smart Goals",
        destination: "SmartGoals",
        icon: <SmartGoalMenuIcon />
    },
    {
        id: 4,
        label: "Units",
        destination: "Units",
        icon: <Units />
    },
    {
        id: 5,
        label: "Settings",
        destination: "JournalsNavigator",
        icon: <Settings />
    }
];