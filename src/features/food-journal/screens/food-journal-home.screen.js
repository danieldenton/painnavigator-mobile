import React, { useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { FlatList, TouchableOpacity } from "react-native";
import { NewJournalEntry } from "../../../components/journals/new-journal-entry.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";

export const FoodJournalHomeScreen = ({ navigation }) => {
    const { foodJournals, hasJourneledToday } = useContext(FoodJournalContext);

    return(
        <SafeArea>
            <TouchableOpacity 
                onPress={() => navigation.navigate("ReviewFoodJournal", 
                    { 
                        journal: hasJourneledToday && foodJournals[0].attributes 
                    }
                )}
            > 
                <NewJournalEntry title={"Today's Food Journal"} />
            </TouchableOpacity>
            <FlatList 
                data={foodJournals}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ReviewFoodJournal", 
                        {
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