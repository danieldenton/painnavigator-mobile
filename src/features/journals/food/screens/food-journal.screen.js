import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { NewJournalEntry } from "../../../../components/new-journal-entry.component";
import { JournalTile } from "../../../../components/journal-tile.component";

export const FoodJournalScreen = ({ navigation }) => {
    const foodJournals = [];

    return(
        <View>
            <NewJournalEntry title={"Today's Food Journal"} destination={"TodaysFoodJournal"} navigation={navigation} />
            <FlatList 
                data={foodJournals}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ReviewFoodJournal", {
                            journal: item.attributes,
                            journalId: item.id
                        })}> 
                            <JournalTile journal={item.attributes} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};