import React, { useContext, useEffect, useState } from "react";
import { JournalContainer, ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { FoodJournalQuestionSection } from "./food-journal-question-section.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";

export const FoodJournalEntry = ({ journalId }) => {
    const { addFoodJournalEntry, changeEntry, completeFoodJournal, meal, foodJournal } = useContext(FoodJournalContext);
    const { food } = foodJournal; 
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
        if (food.length !== 0) {
            setSubmitDisabled(false);
        }   else {
            setSubmitDisabled(true);
        };
    }, [foodJournal]);

    return(
        <JournalContainer>
            <FoodJournalQuestionSection 
                meal={meal}
                changeEntry={changeEntry}
                foodJournal={foodJournal}
            />
            <ButtonSection>
                <JournalButton 
                    title={"Log Meal"}
                    onPress={() => { journalId ? addFoodJournalEntry(journalId) : completeFoodJournal() }} 
                    disabled={submitDisabled}
                />
            </ButtonSection>
        </JournalContainer>        
    );
};