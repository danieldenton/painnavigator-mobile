import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { JournalTile } from "../../../components/journal-tile.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { NewJournalEntry } from "../../../components/new-journal-entry.component";
import { SafeArea } from "../../../components/safe-area.component";
import { SubHeader } from "../../../components/typography.component"

export const MoodJournalHomeScreen = ({ navigation }) => {
    const { moodJournals } = useContext(MoodJournalContext);

    return(
        <SafeArea>
            <NewJournalEntry title={"Add New Entry"} destination={"NewMoodJournal"} navigation={navigation} />
            <SubHeader title={"PREVIOUS ENTRIES"} size={14} />
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