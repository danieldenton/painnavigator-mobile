import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";

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
        otherNotes: "",
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

export const PainJournalScreen = ({ navigation }) => {

    const journalEntries = journalData.map((journal) => 
        <JournalTile 
            key={journal.id}
            date={journal.date}
            summary={journal.summary}
            journal={journal}
            destination={"ReviewPainJournal"}
            navigation={navigation}
        />);

    return(
        <View>
            <DailyActivitiesTile title={"New Pain Journal"} destination={"NewPainJournal"} navigation={navigation} />
            <FlatList 
                data={journalData}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ReviewPainJournal", {
                            journal: item,
                        })}> 
                            <JournalTile journal={item} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 16 }}
            />
        </View>
    );
};