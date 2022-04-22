import React, { useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { NewJournalEntry } from "../../../components/new-journal-entry.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";

export const MoodJournalHomeScreen = ({ navigation }) => {
    const { moodJournals } = useContext(MoodJournalContext);

    return(
        <SafeArea>
            <NewJournalEntry title={"Add New Entry"} destination={"NewMoodJournal"} navigation={navigation} />
            <Text style={{ marginLeft: 16, marginTop: 24 }}>PREVIOUS ENTRIES</Text>
            <FlatList 
                data={moodJournals}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ReviewMoodJournal", 
                        {
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