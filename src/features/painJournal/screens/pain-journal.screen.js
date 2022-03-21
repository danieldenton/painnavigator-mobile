import React from "react";
import { View, Text, ScrollView } from "react-native";

import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalTile } from "../../../components/journal-tile.component";

const journalData = [
    {
        id: 1,
        date: "March 21st, 2022",
        summary: "My pain was an 8",
        painScore: 8,
        painSetting: "At home",
        painFeeling: "Sad",
        whoWith: "Friends",
        copingStrategies: [1, 2, 3],
        otherNotes: nil,
        painAfter: 7
    },
    {
        id: 2,
        date: "March 23rd, 2022",
        summary: "My pain was a 6",
        painScore: 6,
        painSetting: "At work",
        painFeeling: "Angry",
        whoWith: "Coworkers",
        copingStrategies: [1, 2, 3],
        otherNotes: "I felt really discouraged",
        painAfter: 5
    }
]

const journalEntries = journalData.map((journalData) => 
    <JournalTile 
        date={journalData.date}
        summary={journalData.summary}
        destination={"ReviewPainJournal"}
        journalData={journalData}
        naviation={navigation}
    />);

export const PainJournalScreen = ({ navigation }) => {
    return(
        <View>
            <Text>Pain Journal Home</Text> 
            <DailyActivitiesTile title={"New Pain Journal"} destination={"NewPainJournal"} navigation={navigation} />
            <ScrollView>
                {journalEntries}
            </ScrollView>
        </View>
    );
};