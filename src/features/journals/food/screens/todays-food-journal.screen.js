import React from "react";
import { NewJournalEntry } from "../../../../components/new-journal-entry.component";

export const TodaysFoodJournalScreen = () => {
    return(
        <>
            <NewJournalEntry title={"Breakfast"} destination={"NewFoodJournal"} navigation={navigation} />
            <NewJournalEntry title={"Lunch"} destination={"NewFoodJournal"} navigation={navigation} />
            <NewJournalEntry title={"Dinner"} destination={"NewFoodJournal"} navigation={navigation} />
            <NewJournalEntry title={"Snacks"} destination={"NewFoodJournal"} navigation={navigation} />
        </>
    );
};