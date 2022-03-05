import React from "react";
import { View, Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

export const TodayScreenHeader = ({ headerName }) => {
    return (
        <Spacer position="bottom" size="large">
            <View>
                <Text>{headerName}</Text>
            </View>
        </Spacer>
    );
};