import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { JournalContainer, QuestionSection, Question, Input, ButtonSection } from "../../components/journal.styles";
import { Button } from "../../../../components/button.component";
import { FeelingFaces } from "./feeling-faces.component";
import { SmallSpacer } from "../../../../components/spacer.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const AddMealEntry = ({ journalId }) => {
    const { 
        addFoodJournalEntry, 
        meal, 
        newFoodJournalEntry, 
        handleChange, 
    } = useContext(FoodJournalContext);

    const canSubmit = !newFoodJournalEntry.food || !newFoodJournalEntry.feelingBefore || !newFoodJournalEntry.feelingAfter

    return(
        <JournalContainer>
            <ScrollView>
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
                <FeelingFaces name={"feelingBefore"} feeling={newFoodJournalEntry.feelingBefore} />
                <SmallSpacer />
                <Question 
                    question={"How did you feel after you ate?"} 
                    helpText={"This could include your mood, how your body felt, or your level of pain"}
                />
                <FeelingFaces name={"feelingAfter"} feeling={newFoodJournalEntry.feelingAfter} />
            </QuestionSection>
            </ScrollView>
            <ButtonSection>
                <Button onPress={() => addFoodJournalEntry(journalId)} disabled={canSubmit}>
                    Log Meal
                </Button>
            </ButtonSection>
        </JournalContainer>        
    );
};