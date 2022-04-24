import React, { useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { FlatList, TouchableOpacity } from "react-native";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const PainJournalHomeScreen = ({ navigation }) => {
    const { painJournals } = useContext(PainJournalContext);

    return(
        <SafeArea>
            <DailyActivitiesTile title={"Add New Entry"} destination={"NewPainJournal"} navigation={navigation} />
            <FlatList 
                data={painJournals}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ReviewPainJournal", {
                            journal: item.attributes,
                            journalId: item.id
                        })}> 
                            <JournalTile journal={item.attributes} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </SafeArea>
    );
};