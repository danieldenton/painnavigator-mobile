import React, { useContext } from "react";
import styled from "styled-components/native";
import { JournalQuestion } from "../../../components/journal-question.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { MultiSelectCheckBox } from "../../../components/multi-select-checkbox.component";
import { ScrollView } from "react-native";

const MultiSelectScroll = styled(ScrollView)`
`;

export const CognitiveDistortions = () => {
    const { currentPageData, moodJournalEntry, setMoodJournalEntry } = useContext(MoodJournalContext);
    const { options } = currentPageData;
    const selectedCognitiveDistortions = moodJournalEntry.cognitiveDistortions;

    const add = (optionId) => {
        setMoodJournalEntry(journal => ({
            ...journal,
            ["cognitiveDistortions"]: [...selectedCognitiveDistortions, optionId]
        }));
    };
    
    const remove = (optionId) => {
        const newCognitiveDistortions = selectedCognitiveDistortions.filter(
          (x) => x !== optionId
        );

        setMoodJournalEntry(journal => ({
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
                {cognitiveDistortions}
            </MultiSelectScroll>
        </>
    );
}; 