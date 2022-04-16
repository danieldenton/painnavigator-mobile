import React, { useEffect, useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { Text } from "react-native";

import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";

export const JournalScreen = ({ navigation }) => {
    const { loadPainJournals } = useContext(PainJournalContext);
    const { loadFoodJournals } = useContext(FoodJournalContext);

    useEffect(() => {
        loadPainJournals();
        loadFoodJournals();
    }, [])

    return(
        <SafeArea>
            <Text>Journal Screen</Text>
            <DailyActivitiesTile title={"Pain Journal"} destination={"PainJournal"} navigation={navigation} />
            <DailyActivitiesTile title={"Mood Journal"} destination={"MoodJournal"} navigation={navigation} />
            <DailyActivitiesTile title={"Food Journal"} destination={"FoodJournal"} navigation={navigation} />
        </SafeArea>
    );
};