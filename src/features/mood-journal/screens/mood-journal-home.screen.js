import React, { useContext, useEffect, useState } from "react";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { FlatList, TouchableOpacity, Text } from "react-native";
import { JournalTile } from "../../../components/journal-tile.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { SafeArea } from "../../../components/safe-area.component";
import { SubHeader } from "../../../components/typography.component";
import { useIsFocused } from '@react-navigation/native';
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";

export const MoodJournalHomeScreen = ({ navigation }) => {
    const { moodJournal, moodJournals } = useContext(MoodJournalContext);
    const [journals, setJournals] = useState({});

    const isFocused = useIsFocused();

    useEffect(() => {
        console.log(JSON.stringify(journals));
        console.log(JSON.stringify(moodJournal));
    } , [navigation]);

    useEffect(() => {
        console.log("help");
        setJournals(moodJournals);
    }, [moodJournals]);

    return(
        <SafeArea>
            <NavigationBarLeft navigation={navigation} destination={"Journals"} screen={"Mood Journal"} />
            <DailyActivitiesTile title={"Add New Entry"} destination={"NewMoodJournal"} navigation={navigation} />
            <SubHeader title={"PREVIOUS ENTRIES"} size={14} marginTop={34} marginBottom={14} />
            <FlatList 
                data={moodJournals}
                extraData={moodJournals}
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