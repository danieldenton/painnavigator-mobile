import React from "react";
import { View, Text } from "react-native";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

export const SettingsScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft navigation={navigation} screen={"Settings"} destination={"Today"} />
            <Text>
                SettingsScreen
            </Text>
        </SafeView>
    );
};