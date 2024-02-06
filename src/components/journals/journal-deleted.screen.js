import React from "react";
import { Success } from "./success.component";

export const JournalDeletedScreen = ({ navigation, route }) => {
    const { type } = route.params;

    return (
        <Success 
            deleted={true}
            navigation={navigation}
            type={type}
        />
    );
};