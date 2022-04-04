import React, { useContext } from "react";
import { SafeArea } from "../../../../components/safe-area.component";
import { FlatList, TouchableOpacity, Text } from "react-native";
import { NewJournalEntry } from "../../../journals/components/new-journal-entry.component";
import { JournalTile } from "../../../../components/journal-tile.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const FoodJournalScreen = ({ navigation }) => {
    const { foodJournals } = useContext(FoodJournalContext);
    const today = "4/4/22"
    const mostRecentFoodJournal = foodJournals[0];
    const todaysJournal = mostRecentFoodJournal.attributes.date === today && mostRecentFoodJournal;
    const destination = todaysJournal ? "ReviewFoodJournal" : "TodaysFoodJournal";

    return(
        <SafeArea>
             <TouchableOpacity 
                onPress={() => navigation.navigate(destination, { journal: todaysJournal && mostRecentFoodJournal.attributes })}> 
                <NewJournalEntry title={"Today's Food Journal"} />
            </TouchableOpacity>
            <Text>{destination}</Text>
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