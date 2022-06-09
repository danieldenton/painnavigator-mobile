import React, { useContext, useEffect, useState } from "react";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { FoodJournalQuestionSection } from "./food-journal-question-section.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";

export const FoodJournalEntry = ({ journalId, navigation }) => {
    const { updateFoodJournal, changeEntry, completeFoodJournal, meal, foodJournal } = useContext(FoodJournalContext);
    const { food, feelingBefore, feelingAfter } = foodJournal;
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
        if ( food.length !== 0 & feelingBefore.length !== 0 & feelingAfter.length !==0 ) {
            setSubmitDisabled(false);
        }   else {
            setSubmitDisabled(true);
        };
    }, [foodJournal]);

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
                    onPress={() => {
                        { journalId ? 
                            (
                                updateFoodJournal(journalId),
                                navigation.navigate("JournalUpdated", { type: "FoodJournal" })
                            ) 
                            : 
                            (
                                completeFoodJournal(),
                                navigation.navigate("JournalCreated", { type: "FoodJournal" })
                            ) 
                        }
                    }} 
                    disabled={submitDisabled}
                />
            </ButtonSection>
        </>        
    );
};