import React, { useEffect, useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";

export const JournalScreen = ({ navigation }) => {
    const { loadPainJournals } = useContext(PainJournalContext);
    const { loadFoodJournals } = useContext(FoodJournalContext);
    const { loadMoodJournals } = useContext(MoodJournalContext);

    useEffect(() => {
        loadPainJournals();
        loadMoodJournals();
        loadFoodJournals();
    }, [])

    return(
        <SafeView>
            <NavigationBarLeft navigation={navigation} destination={"Today"} screen={"Journals"} />
            <DailyActivitiesTile title={"Pain Journal"} destination={"PainJournal"} navigation={navigation} />
            <DailyActivitiesTile title={"Mood Journal"} destination={"MoodJournal"} navigation={navigation} />
            <DailyActivitiesTile title={"Food Journal"} destination={"FoodJournal"} navigation={navigation} />
        </SafeView>
    );
};