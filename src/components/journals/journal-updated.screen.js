import React from "react";
import { Success } from "./success.component";

export const JournalUpdatedScreen = ({ navigation, route }) => {
    const { type } = route.params;

    return (
        <Success 
            navigation={navigation}
            type={type}
        />
    )
};