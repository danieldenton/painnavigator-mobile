import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { NewJournalEntry } from "../../../components/journals/new-journal-entry.component";
import { FoodJournalContext } from "../../../services/food-journal.context";
import { track } from "@amplitude/analytics-react-native";


export const NewFoodJournalEntry = ({ meal, trackViewMealEvent, navigation, journalId }) => {
    const { setMeal }= useContext(FoodJournalContext);

    return (
        <TouchableOpacity 
            onPress={() => 
                {
                    navigation.navigate("FoodJournalEntry", { journalId: journalId ? journalId : null}),
                    setMeal(meal),
                    track(trackViewMealEvent)
                }}
        >
            <NewJournalEntry title={meal}/>
        </TouchableOpacity>
    )
};