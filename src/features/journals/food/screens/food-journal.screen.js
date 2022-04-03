import React, { useContext } from "react";
import { SafeArea } from "../../../../components/safe-area.component";
import { JournalContainer } from "../../components/journal.styles";
import { FlatList, TouchableOpacity } from "react-native";
import { NewJournalEntry } from "../../../../components/new-journal-entry.component";
import { JournalTile } from "../../../../components/journal-tile.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const FoodJournalScreen = ({ navigation }) => {
    const { foodJournals } = useContext(FoodJournalContext);

    return(
        <SafeArea>
            <NewJournalEntry title={"Today's Food Journal"} destination={"TodaysFoodJournal"} navigation={navigation} />
            <FlatList 
                data={foodJournals}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ReviewFoodJournal", {
                            journal: item.attributes
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