import React, { useContext, useEffect } from "react";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { FoodJournalQuestionSection } from "./food-journal-question-section.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { track } from '@amplitude/analytics-react-native'
import { FOOD_JOURNAL_EVENTS } from "../../../amplitude-events";

export const FoodJournalEntry = ({ journalId, navigation }) => {
    const { updateFoodJournal, changeEntry, completeFoodJournal, meal, foodJournal } = useContext(FoodJournalContext);
    const { food, feelingBefore, feelingAfter } = foodJournal;

    useEffect(() => {
        let trackEvent
        if (meal === "Breakfast") {
          trackEvent = FOOD_JOURNAL_EVENTS.BREAKFAST_LOG_MEAL
        } else if (meal === "Lunch") {
          trackEvent = FOOD_JOURNAL_EVENTS.LUNCH_LOG_MEAL
        } else if (meal === "Dinner") {
          trackEvent = FOOD_JOURNAL_EVENTS.DINNER_LOG_MEAL
        } else if (meal === "Snacks") {
          trackEvent = FOOD_JOURNAL_EVENTS.SNACKS_LOG_MEAL
        } 
      }, [meal])

    const handleUpdateFoodJournal = () => {
        track(FOOD_JOURNAL_EVENTS.EDIT_PREVIOUS_FOOD_JOURNAL)
        updateFoodJournal(journalId)
        navigation.navigate("JournalUpdated", { type: "FoodJournal" })
    }

    const handleCompleteFoodJournal = () => {
        track(trackEvent)
        completeFoodJournal()
        navigation.navigate("JournalCreated", { type: "FoodJournal" })
    }

    return(
        <>
            <FoodJournalQuestionSection 
                meal={meal}
                changeEntry={changeEntry}
                foodJournal={foodJournal}
            />
            <ButtonSection>
                <JournalButton 
                    title={"Log Meal"}
                    onPress={() => {journalId ? handleUpdateFoodJournal() : handleCompleteFoodJournal()}} 
                    disabled={food.length > 0 & feelingBefore.length > 0 & feelingAfter.length > 0 ? false : true}
                />
            </ButtonSection>
        </>        
    );
};