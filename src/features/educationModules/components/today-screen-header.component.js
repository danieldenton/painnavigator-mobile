import React from "react";
import { View, Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
// spacer causing android emulator to crash currently

export const TodayScreenHeader = ({ headerName }) => {
    return (
        <View>
            <Text>{headerName}</Text>
        </View>
    );
};
