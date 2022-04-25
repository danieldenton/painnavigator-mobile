import React, { useContext, useEffect } from "react";
import { JournalContainer } from "../../../components/journals/journal.styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InputQuestion, IntensityQuestion } from "../../../components/review-journal-question.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const ReviewPainJournalEntry = ({ journal }) => {
    const { changeEntry, editingPainJournal, painJournal, setPainJournal } = useContext(PainJournalContext);
    const { date, intensity, situation, feeling, whoIWasWith, copingStrategies, notes, intensityAfter } = painJournal;

    useEffect(() => {
        setPainJournal(journal);
    }, [journal])

    const dateEntry = { question: "DATE", response: date };

    const journalEntry = [
        { question: "PAIN INTENSITY", response: intensity, type: "intensity", state: "intensity" },
        { question: "SITUATION", response: situation, type: "input", state: "situation" },
        { question: "PRIMARY FEELING", response: feeling, type: "input", state: "feeling" },
        { question: "WHO I WAS WITH", response: whoIWasWith, type: "input", state: "whoIWasWith" },
        { question: "COPING STRATEGIES", response: copingStrategies, type: "input", state: "copingStrategies" },
        { question: "NOTES", response: notes, type: "input", state: "notes" },
        { question: "PAIN INTESITY AFTER EPISODE", response: intensityAfter, type: "input", state: "intensityAfter" }
    ];

    const journalEntryResponses = journalEntry.map((entry) => {
        return (
            entry.type === "input" ? 
                <InputQuestion 
                    changeEntry={changeEntry}
                    editing={editingPainJournal}
                    entry={entry}
                    key={entry.state} 
                /> 
                : 
                <IntensityQuestion 
                    changeEntry={changeEntry}
                    editing={editingPainJournal} 
                    entry={entry} 
                    key={entry.state} 
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