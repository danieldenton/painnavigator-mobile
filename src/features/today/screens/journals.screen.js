import React, { useEffect, useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { Text } from "react-native";

import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const JournalScreen = ({ navigation }) => {
    const { loadPainJournals } = useContext(PainJournalContext);

    useEffect(() => {
        loadPainJournals();
    }, [])

    return(
        <SafeArea>
            <Text>Journal Screen</Text>
            <DailyActivitiesTile title={"Pain Journal"} destination={"PainJournal"} navigation={navigation} />
        </SafeArea>
    );
};