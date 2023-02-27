import React, { useContext, useEffect, useState } from "react";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { FoodJournalQuestionSection } from "./food-journal-question-section.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { track } from '@amplitude/analytics-react-native'
import { FOOD_JOURNAL_EVENTS } from "../../../amplitude-events";

export const FoodJournalEntry = ({ journalId, navigation }) => {
    const { updateFoodJournal, changeEntry, completeFoodJournal, meal, foodJournal } = useContext(FoodJournalContext);
    const { food, feelingBefore, feelingAfter } = foodJournal;
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
        if ( food.length > 0 & feelingBefore.length > 0 & feelingAfter.length > 0 ) {
            setSubmitDisabled(false);
        }   else {
            setSubmitDisabled(true);
        };
    }, [foodJournal]);

    const handleLogMealTrack = () => {
        if (meal === "Breakfast") {
          track(FOOD_JOURNAL_EVENTS.BREAKFAST_LOG_MEAL);
        } else if (meal === "Lunch") {
          track(FOOD_JOURNAL_EVENTS.LUNCH_LOG_MEAL);
        } else if (meal === "Dinner") {
          track(FOOD_JOURNAL_EVENTS.DINNER_LOG_MEAL);
        } else if (meal === "Snacks") {
          track(FOOD_JOURNAL_EVENTS.SNACKS_LOG_MEAL);
        }
      };

    const handleUpdateFoodJournal = () => {
        updateFoodJournal(journalId)
        track(FOOD_JOURNAL_EVENTS.EDIT_PREVIOUS_FOOD_JOURNAL)
        navigation.navigate("JournalUpdated", { type: "FoodJournal" })
    }

    const handleCompleteFoodJournal = () => {
        completeFoodJournal(),
        handleLogMealTrack(),
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
                    disabled={submitDisabled}
                />
            </ButtonSection>
        </>        
    );
};