import React from "react";
import { SafeArea } from "../../../../components/safe-area.component";
import { NewFoodJournalEntry } from "../components/new-food-journal-entry.component";

export const TodaysFoodJournalScreen = ({ navigation }) => {
    return(
        <SafeArea>
            <NewFoodJournalEntry meal={"Breakfast"} destination={"NewFoodJournal"} navigation={navigation}/>
            <NewFoodJournalEntry meal={"Lunch"} destination={"NewFoodJournal"} navigation={navigation}/>
            <NewFoodJournalEntry meal={"Dinner"} destination={"NewFoodJournal"} navigation={navigation}/>
            <NewFoodJournalEntry meal={"Snacks"} destination={"NewFoodJournal"} navigation={navigation}/>
        </SafeArea>
    );
};