import React, { useContext, useEffect } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InputQuestion, IntensityQuestion } from "../../../components/review-journal-question.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const ReviewPainJournalEntry = ({ editing, journal }) => {
    const { editJournal, reviewJournal, setReviewJournal } = useContext(PainJournalContext);
    const { date, intensity, situation, feeling, who_i_was_with, coping_strategies, notes, intensity_after } = journal;
    const { 
        intensity: editIntensity, 
        situation: editSituation, 
        feeling: editFeeling, 
        who_i_was_with: editWhoIWasWith, 
        coping_strategies: editCopingStrategies, 
        notes: editNotes, 
        intensity_after: editIntensityAfter 
    } = reviewJournal;

    useEffect(() => {
        setReviewJournal(journal);
    }, []);

    const dateEntry = { question: "DATE", response: date };

    const journalEntry = [
        {question: "PAIN INTENSITY", response: editing ? editIntensity : intensity, type: "intensity", state: "intensity"},
        {question: "SITUATION", response: editing ? editSituation : situation, type: "input", state: "situation"},
        {question: "PRIMARY FEELING", response: editing ? editFeeling : feeling, type: "input", state: "feeling"},
        {question: "WHO I WAS WITH", response: editing ? editWhoIWasWith : who_i_was_with, type: "input", state: "who_i_was_with"},
        {question: "COPING STRATEGIES", response: editing ? editCopingStrategies : coping_strategies, type: "input", state: "coping_strategies"},
        {question: "NOTES", response: editing ? editNotes : notes, type: "input", state: "notes"},
        {question: "PAIN INTESITY AFTER EPISODE", response: editing ? editIntensityAfter : intensity_after, type: "intensity", state: "intensity_after"}
    ];

    const journalEntryResponses = journalEntry.map((entry) => {
        return (
            entry.type === "input" ? 
                <InputQuestion 
                    changeEntry={editJournal}
                    editing={editing}
                    entry={entry}
                    key={entry.state} 
                /> 
                : 
                <IntensityQuestion 
                    changeEntry={editJournal}
                    editing={editing} 
                    entry={entry} 
                    key={entry.state} 
                />
        );
    });

    return (
        <KeyboardAwareScrollView style={{ marginRight: -16, paddingRight: 16 }}>
            <InputQuestion entry={dateEntry} />
            {journalEntryResponses}
        </KeyboardAwareScrollView>
    );
};