import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InputQuestion, IntensityQuestion } from "../../../components/review-journal-question.component";

export const ReviewMoodJournalEntry = () => {
    const [editing, setEditing] = useState(false);

    const journalEntry = [
        {
            question: "FEELING",
            response: "Happy",
            type: "input",
            state: "feeling"
        },
        {
            question: "FEELING INTENSITY",
            response: 5,
            type: "intensity",
            state: "intensity"
        },
        {
            question: "SITUATION",
            response: "At home",
            type: "input",
            state: "situation"
        },
        {
            question: "WHO I WAS WITH",
            response: "My family",
            type: "input",
            state: "whoIWasWith"
        },
        {
            question: "PRIMARY THOUGHT",
            response: "I will never",
            type: "input",
            state: "primaryThought"
        },
        {
            question: "COGNITIVE DISTORTIONS",
            response: "Catastrophizing, Emotional reasoning",
            type: "input",
            state: "cognitiveDistortions"
        }
    ];

    const journalEntryResponses = journalEntry.map((entry) => {
        return (
            type === "input" ? 
                <InputQuestion 
                    editing={editing}
                    entry={entry} 
                /> 
                : 
                <IntensityQuestion 
                    editing={editing} 
                    entry={entry} 
                />
        );
    });

    return (
        <KeyboardAwareScrollView>
            {journalEntryResponses}
        </KeyboardAwareScrollView>
    );
};