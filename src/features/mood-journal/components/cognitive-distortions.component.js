import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { MultiSelectCheckBox, MultiSelectScroll } from "../../../components/multi-select-checkbox.component";
import { View } from "react-native";

export const CognitiveDistortions = () => {
    const { currentPageData, moodJournal, setMoodJournal } = useContext(MoodJournalContext);
    const { options } = currentPageData;
    const selectedCognitiveDistortions = moodJournal.cognitiveDistortions;

    const add = (optionId) => {
        setMoodJournal(journal => ({
            ...journal,
            ["cognitiveDistortions"]: [...selectedCognitiveDistortions, optionId]
        }));
    };
    
    const remove = (optionId) => {
        const newCognitiveDistortions = selectedCognitiveDistortions.filter(
          (x) => x !== optionId
        );

        setMoodJournal(journal => ({
            ...journal,
            ["cognitiveDistortions"]: newCognitiveDistortions
        }));    
    };

    const cognitiveDistortions = options.map((option) => {
        return (
            <MultiSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                remove={remove}
                selectedOptions={selectedCognitiveDistortions}
            />            
        );
    });

    return (
        <>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText} />
            <MultiSelectScroll>
                <View style={{ marginBottom: 60 }}>
                    {cognitiveDistortions}
                </View>
            </MultiSelectScroll>
        </>
    );
}; 