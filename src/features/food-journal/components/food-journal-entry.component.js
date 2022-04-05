import React, { useContext } from "react";
import { JournalContainer, ButtonSection } from "../../../components/journals/journal.styles";
import { Button } from "../../../components/button.component";
import { FoodJournalQuestionSection } from "./food-journal-question-section.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";

export const FoodJournalEntry = ({ journalId }) => {
    const { addFoodJournalEntry, completeFoodJournal, meal, newFoodJournalEntry, handleChange } = useContext(FoodJournalContext);
    const canSubmit = !newFoodJournalEntry.food || !newFoodJournalEntry.feelingBefore || !newFoodJournalEntry.feelingAfter

    return(
        <JournalContainer>
            <FoodJournalQuestionSection 
                meal={meal}
                handleChange={handleChange}
                newFoodJournalEntry={newFoodJournalEntry}
            />
            <ButtonSection>
                <Button 
                    onPress={() => { journalId ? addFoodJournalEntry(journalId) : completeFoodJournal() }} 
                    disabled={canSubmit}
                >
                    Log Meal
                </Button>
            </ButtonSection>
        </JournalContainer>        
    );
};