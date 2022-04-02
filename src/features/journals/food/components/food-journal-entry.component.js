import React, { useContext, useEffect } from "react";
import { JournalContainer, QuestionSection, Question, Input, ButtonSection } from "../../components/journal.styles";
import { Button } from "../../../../components/button.component";
import { FeelingFaces } from "./feeling-faces.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const FoodJournalEntry = () => {
    const { completeFoodJournal, meal, newFoodJournalEntry, setNewFoodJournalEntry } = useContext(FoodJournalContext);

    const handleChange = (change, name) => {
        setNewFoodJournalEntry(journal => ({
            ...journal,
            [name]: change
        }));
    };

    const setFeelingBefore = (feelingBefore) => {
        setNewFoodJournalEntry(journal => ({
            ...journal,
            feelingBefore: feelingBefore
        }));
    };

    const setFeelingAfter = (feelingAfter) => {
        setNewFoodJournalEntry(journal => ({
            ...journal,
            feelingAfter: feelingAfter
        }));
    };

    useEffect(() => {
    }, [newFoodJournalEntry]);

    return(
        <JournalContainer>
            <QuestionSection>
                <Question 
                    question={`What did you have for ${meal}?`} 
                    helpText={"For example: Oatmeal with raisins and walnuts and a cup of coffee with cream"}
                />
                <Input 
                    value={newFoodJournalEntry.food} 
                    onChangeText={(change) => handleChange(change, "food")}
                />
                <Question 
                    question={"How did you feel before you ate?"} 
                    helpText={"This could include your mood, how your body felt, or your level of pain"}
                />
                <FeelingFaces 
                    setter={setFeelingBefore} 
                    feeling={newFoodJournalEntry.feelingBefore}
                />
                <Question 
                    question={"How did you feel after you ate?"} 
                    helpText={"This could include your mood, how your body felt, or your level of pain"}
                />
                <FeelingFaces 
                    setter={setFeelingAfter} 
                    feeling={newFoodJournalEntry.feelingAfter}
                />
            </QuestionSection>
            <ButtonSection>
                <Button 
                    onPress={completeFoodJournal}
                    //TODO: Confirm policy for disabled submit button
                    disabled={
                        !newFoodJournalEntry.food ||
                        !newFoodJournalEntry.feelingBefore ||
                        !newFoodJournalEntry.feelingAfter
                        && true
                    }
                >
                    Log Meal
                </Button>
            </ButtonSection>
        </JournalContainer>        
    );
};