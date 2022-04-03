import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { NewJournalEntry } from "../../components/new-journal-entry.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const NewFoodJournalEntry = ({ meal, destination, navigation, journalId }) => {
    const { setMeal } = useContext(FoodJournalContext);

    return (
        <TouchableOpacity 
            onPress={() => 
                {
                    navigation.navigate(destination, { journalId: journalId });
                    setMeal(meal);
                }}
        >
            <NewJournalEntry title={meal}/>
        </TouchableOpacity>
    )
};