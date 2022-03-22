import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";

import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalTile } from "../../../components/journal-tile.component";

import { painJournalEntries } from "../../../services/pain-journal/data/pain-journals-data.json";

export const PainJournalScreen = ({ navigation }) => {
    return(
        <View>
            <DailyActivitiesTile title={"New Pain Journal"} destination={"NewPainJournal"} navigation={navigation} />
            <FlatList 
                data={painJournalEntries}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ReviewPainJournal", {
                            item: item,
                        })}> 
                            <JournalTile item={item} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};