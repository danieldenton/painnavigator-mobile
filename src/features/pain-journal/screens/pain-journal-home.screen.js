import React, { useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { FlatList, TouchableOpacity } from "react-native";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { SubHeader } from "../../../components/typography.component"
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";

export const PainJournalHomeScreen = ({ navigation }) => {
    const { painJournals } = useContext(PainJournalContext);

    return(
        <SafeArea>
            <NavigationBarLeft navigation={navigation} destination={"Journals"} screen={"Pain Journal"} />
            <DailyActivitiesTile title={"Add New Entry"} destination={"NewPainJournal"} navigation={navigation} />
            <SubHeader title={"PREVIOUS ENTRIES"} size={14} marginTop={34} marginBottom={14} />
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