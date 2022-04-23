import React, { useContext, useEffect } from "react";
import { JournalContainer } from "../../../components/journals/journal.styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InputQuestion, IntensityQuestion } from "../../../components/review-journal-question.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import styled from "styled-components/native";

export const ReviewMoodJournalEntry = ({ journal }) => {
    const { changeEntry, editingMoodJournal, moodJournalEntry, setMoodJournalEntry } = useContext(MoodJournalContext);

    useEffect(() => {
        setMoodJournalEntry(journal);
    }, [journal])

    const dateEntry = { question: "DATE", response: moodJournalEntry.date };

    const journalEntry = [
        {
            question: "FEELING",
            response: moodJournalEntry.feeling,
            type: "input",
            state: "feeling"
        },
        {
            question: "FEELING INTENSITY",
            response: moodJournalEntry.intensity,
            type: "intensity",
            state: "intensity"
        },
        {
            question: "SITUATION",
            response: moodJournalEntry.situation,
            type: "input",
            state: "situation"
        },
        {
            question: "WHO I WAS WITH",
            response: moodJournalEntry.whoIWasWith || "...",
            type: "input",
            state: "whoIWasWith"
        },
        {
            question: "PRIMARY THOUGHT",
            response: moodJournalEntry.primaryThought,
            type: "input",
            state: "primaryThought"
        },
        {
            question: "COGNITIVE DISTORTIONS",
            response: moodJournalEntry.cognitiveDistortions,
            type: "input",
            state: "cognitiveDistortions"
        }
    ];

    const journalEntryResponses = journalEntry.map((entry) => {
        return (
            entry.type === "input" ? 
                <InputQuestion 
                    changeEntry={changeEntry}
                    editing={editingMoodJournal}
                    entry={entry} 
                /> 
                : 
                <IntensityQuestion 
                    changeEntry={changeEntry}
                    editing={editingMoodJournal} 
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