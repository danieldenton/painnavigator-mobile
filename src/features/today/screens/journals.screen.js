import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "react-native";

import { DailyActivitiesTile } from "../../../components/dailyActivities/daily-activities-tile.component";

export const JournalScreen = ({ navigation }) => {
    return(
        <SafeArea>
            <Text>Journal Screen</Text>
            <DailyActivitiesTile title={"Pain Journal"} destination={"PainJournal"} navigation={navigation} />
        </SafeArea>
    );
};