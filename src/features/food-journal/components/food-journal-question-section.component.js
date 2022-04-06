import React from "react";
import { QuestionSection, Question, Input } from "../../../components/journals/journal.styles";
import { FeelingFaces } from "./feeling-faces.component";
import { SmallSpacer } from "../../../components/spacer.component";

export const FoodJournalQuestionSection = ({ meal, handleChange, newFoodJournalEntry }) => {
    return (
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
    );
};