import React, { useContext, useEffect } from "react";
import { JournalContainer } from "../../../components/journals/journal.styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InputQuestion, IntensityQuestion } from "../../../components/review-journal-question.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";

export const ReviewMoodJournalEntry = ({ journal }) => {
    const { changeEntry, editingMoodJournal, moodJournal, setMoodJournal } = useContext(MoodJournalContext);
    const { date, feeling, intensity, situation, whoIWasWith, primaryThought, cognitiveDistortions } = moodJournal;

    useEffect(() => {
        setMoodJournal(journal);
    }, [journal]);

    const dateEntry = { question: "DATE", response: date };

    const journalEntry = [
        { question: "FEELING", response: feeling, type: "input", state: "feeling" },
        { question: "FEELING INTENSITY", response: intensity, type: "intensity", state: "intensity" },
        { question: "SITUATION", response: situation, type: "input", state: "situation" },
        { question: "WHO I WAS WITH", response: whoIWasWith, type: "input", state: "whoIWasWith" },
        { question: "PRIMARY THOUGHT", response: primaryThought, type: "input", state: "primaryThought" },
        { question: "COGNITIVE DISTORTIONS", response: cognitiveDistortions, type: "input", state: "cognitiveDistortions" }
    ];

    const journalEntryResponses = journalEntry.map((entry) => {
        return (
            entry.type === "input" ? 
                <InputQuestion 
                    changeEntry={changeEntry}
                    editing={editingMoodJournal}
                    entry={entry}
                    key={entry.state} 
                /> 
                : 
                <IntensityQuestion 
                    changeEntry={changeEntry}
                    editing={editingMoodJournal} 
                    entry={entry} 
                    key={entry.state} 
                />
        );
    });

    return (
        <KeyboardAwareScrollView style={{ margin: -16 }}>
            <JournalContainer style={{ marginBottom: editingMoodJournal ? 120 : 0 }}>
                <InputQuestion entry={dateEntry} />
                {journalEntryResponses}
            </JournalContainer>
        </KeyboardAwareScrollView>
    );
};