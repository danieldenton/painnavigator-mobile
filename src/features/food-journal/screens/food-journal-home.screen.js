import React, { useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { FlatList, TouchableOpacity } from "react-native";
import { NewJournalEntry } from "../../../components/journals/new-journal-entry.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { SubHeader } from "../../../components/typography.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";

export const FoodJournalHomeScreen = ({ navigation }) => {
    const { foodJournals, hasJourneledToday } = useContext(FoodJournalContext);

    return(
        <SafeArea>
            <NavigationBarLeft navigation={navigation} destination={"Journals"} screen={"Food Journal"} />
            <TouchableOpacity 
                onPress={() => navigation.navigate("ReviewFoodJournal", 
                    { 
                        journal: hasJourneledToday && foodJournals[0].attributes 
                    }
                )}
            > 
                <NewJournalEntry title={"Today's Food Journal"} />
            </TouchableOpacity>
            <SubHeader title={"PREVIOUS ENTRIES"} size={14} marginTop={34} marginBottom={14} />
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