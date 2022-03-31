import React from "react";
import { SafeArea } from "../../../../components/safe-area.component";
import { NewJournalEntry } from "../../components/new-journal-entry.component";

export const TodaysFoodJournalScreen = ({ navigation }) => {
    return(
        <SafeArea>
            <NewJournalEntry title={"Breakfast"} destination={"NewFoodJournal"} navigation={navigation} meal={0} />
            <NewJournalEntry title={"Lunch"} destination={"NewFoodJournal"} navigation={navigation} meal={1} />
            <NewJournalEntry title={"Dinner"} destination={"NewFoodJournal"} navigation={navigation} meal={2} />
            <NewJournalEntry title={"Snacks"} destination={"NewFoodJournal"} navigation={navigation} meal={3} />
        </SafeArea>
    );
};