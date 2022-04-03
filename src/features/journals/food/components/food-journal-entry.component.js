import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { JournalContainer, QuestionSection, Question, Input, ButtonSection } from "../../components/journal.styles";
import { Button } from "../../../../components/button.component";
import { FeelingFaces } from "./feeling-faces.component";
import { SmallSpacer } from "../../../../components/spacer.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const FoodJournalEntry = () => {
    const { 
        completeFoodJournal, 
        newEntryInTodaysJournal,
        meal, 
        newFoodJournalEntry,
        handleChange,
        setFeelingBefore,
        setFeelingAfter,
        todaysJournal
    } = useContext(FoodJournalContext);

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
                <FeelingFaces 
                    feeling={newFoodJournalEntry.feelingBefore}
                    setFeeling={setFeelingBefore} 
                />
                <SmallSpacer />
                <Question 
                    question={"How did you feel after you ate?"} 
                    helpText={"This could include your mood, how your body felt, or your level of pain"}
                />
                <FeelingFaces 
                    feeling={newFoodJournalEntry.feelingAfter}
                    setFeeling={setFeelingAfter} 
                />
            </QuestionSection>
            </ScrollView>
            <ButtonSection>
                <Button 
                    onPress={() => {todaysJournal ? newEntryInTodaysJournal() : completeFoodJournal()}}
                    //TODO: Confirm policy with client for disabled submit button
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