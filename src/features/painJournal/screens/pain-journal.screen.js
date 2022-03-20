import React from "react";
import { View, Text } from "react-native";

import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";

export const PainJournalScreen = ({ navigation }) => {
    return(
        <View>
            <Text>Pain Journal Home</Text> 
            <DailyActivitiesTile title={"New Pain Journal"} destination={"NewPainJournal"} navigation={navigation} />
        </View>
    );
};