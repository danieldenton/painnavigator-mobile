import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { NewJournalEntry } from "../../components/new-journal-entry.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const NewFoodJournalEntry = ({ meal, navigation, journalId }) => {
    const { setMeal } = useContext(FoodJournalContext);

    return (
        <TouchableOpacity 
            onPress={() => 
                {
                    navigation.navigate("NewFoodJournal", { journalId: journalId ? journalId : null});
                    setMeal(meal);
                }}
        >
            <NewJournalEntry title={meal}/>
        </TouchableOpacity>
    )
};