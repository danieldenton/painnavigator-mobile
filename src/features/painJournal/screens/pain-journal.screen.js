import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";

import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalTile } from "../../../components/journal-tile.component";

import { painJournalEntries } from "../../../services/pain-journal/data/pain-journals-data.json";
import { getPainJournals } from "../../../services/pain-journal/pain-journal.service";

export const PainJournalScreen = ({ navigation }) => {
    const [painJournals, setPainJournals] = useState({});
    const [painJournalsLoaded, setPainJournalsLoaded] = useState(false);

    useEffect(() => {
        getPainJournals(setPainJournals, setPainJournalsLoaded);
    }, [])

    useEffect(() => {
        console.log(JSON.stringify(painJournals));
        console.log(painJournalsLoaded);
    }, [painJournals])

    return(
        <View>
            <DailyActivitiesTile title={"New Pain Journal"} destination={"NewPainJournal"} navigation={navigation} />
            <FlatList 
                data={painJournals}
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