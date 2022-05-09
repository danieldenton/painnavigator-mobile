import React from "react";
import { JournalMenuIcon, Settings, Units, ProgressMenuIcon } from "../../icons";

export const menuOptions = [
    {
        label: "My Progress",
        destination: "Progress",
        icon: <ProgressMenuIcon />
    },
    {
        label: "Journals",
        destination: "JournalsNavigator",
        icon: <JournalMenuIcon />
    },
    {
        label: "Units",
        destination: "Units",
        icon: <Units />
    },
    {
        label: "Settings",
        destination: "JournalsNavigator",
        icon: <Settings />
    }
];