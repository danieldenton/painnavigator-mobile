import React, { useState } from "react";
import { JournalContainer } from "../../../components/journals/journal.styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InputQuestion, IntensityQuestion } from "../../../components/review-journal-question.component";

export const ReviewMoodJournalEntry = ({ journal }) => {
    const [editing, setEditing] = useState(false);

    const dateEntry = { question: "DATE", response: journal.date };

    const journalEntry = [
        {
            question: "FEELING",
            response: journal.feeling,
            type: "input",
            state: "feeling"
        },
        {
            question: "FEELING INTENSITY",
            response: journal.intensity,
            type: "intensity",
            state: "intensity"
        },
        {
            question: "SITUATION",
            response: journal.situation,
            type: "input",
            state: "situation"
        },
        {
            question: "WHO I WAS WITH",
            response: journal.whoIWasWith || "...",
            type: "input",
            state: "whoIWasWith"
        },
        {
            question: "PRIMARY THOUGHT",
            response: journal.primaryThought,
            type: "input",
            state: "primaryThought"
        },
        {
            question: "COGNITIVE DISTORTIONS",
            response: journal.cognitiveDistortions,
            type: "input",
            state: "cognitiveDistortions"
        }
    ];

    const journalEntryResponses = journalEntry.map((entry) => {
        return (
            entry.type === "input" ? 
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
        <KeyboardAwareScrollView style={{ margin: -16 }}>
            <JournalContainer>
                <InputQuestion entry={dateEntry} />
                {journalEntryResponses}
            </JournalContainer>
        </KeyboardAwareScrollView>
    );
};