import React, { useEffect, useState } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { FeelingFaces } from "./feeling-faces.component";
import { SmallSpacer } from "../../../components/spacer.component";
import { ScrollView } from "react-native";

export const FoodJournalQuestionSection = ({ meal, changeEntry, foodJournal }) => {
    const [helpText, setHelpText] = useState("");

    useEffect(() => {
        if (meal === "Breakfast") {
            setHelpText("Oatmeal with raisins and walnuts and a cup of coffee with cream");
        } else if (meal === "Lunch") {
            setHelpText("A tomato and cheese sandwich on whole wheat bread and a glass of iced tea");
        } else if (meal === "Dinner") {
            setHelpText("Chicken breast with green salad and a glass of water");
        } else if (meal === "Snacks") {
            setHelpText("Baby carrots, pita bread, and hummus");
        };
    }, [meal]);

    return (
        <ScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <JournalQuestion 
                question={`What did you have for ${meal}?`} 
                helpText={`For example: ${helpText}`}
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