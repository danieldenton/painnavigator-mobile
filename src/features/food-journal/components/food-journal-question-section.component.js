import React from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { FeelingFaces } from "./feeling-faces.component";
import { SmallSpacer } from "../../../components/spacer.component";
import { ScrollView } from "react-native";

export const FoodJournalQuestionSection = ({ meal, changeEntry, foodJournal }) => {
    return (
        <ScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <JournalQuestion 
                question={`What did you have for ${meal}?`} 
                helpText={"For example: Oatmeal with raisins and walnuts and a cup of coffee with cream"}
            />
            <TextInputMedium 
                value={foodJournal.food} 
                onChangeText={(change) => changeEntry(change, "food")}
            />
            <JournalQuestion 
                question={"How did you feel before you ate?"} 
                helpText={"This could include your mood, how your body felt, or your level of pain"}
            />
            <FeelingFaces name={"feelingBefore"} feeling={foodJournal.feelingBefore} />
            <SmallSpacer />
            <JournalQuestion 
                question={"How did you feel after you ate?"} 
                helpText={"This could include your mood, how your body felt, or your level of pain"}
            />
            <FeelingFaces name={"feelingAfter"} feeling={foodJournal.feelingAfter} />
        </ScrollView>
    );
};