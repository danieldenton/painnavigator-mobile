import React, { useContext, useEffect } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { InputQuestion, IntensityQuestion } from "../../../components/review-journal-question.component";
import { formatDate } from "../../../infrastructure/helpers";

export const ReviewMoodJournalEntry = ({ editing, journal }) => {
    const { editJournal, reviewJournal, setReviewJournal } = useContext(MoodJournalContext);
    const { date_time_value, feeling, intensity, situation, who_i_was_with, primary_thought, cognitive_distortions } = journal;
    const { 
        feeling: editFeeling, 
        intensity: editIntensity, 
        situation: editSituation, 
        who_i_was_with: editWhoIWasWith, 
        primary_thought: editPrimaryThought, 
        cognitive_distortions: editCognitiveDistortions 
    } = reviewJournal;

    useEffect(() => {
        setReviewJournal(journal);
    }, []);

    const dateEntry = { question: "DATE", response: formatDate(date_time_value) };

    const journalEntry = [
        { question: "FEELING", response: editing ? editFeeling : feeling, type: "input", state: "feeling" },
        { question: "FEELING INTENSITY", response: editing ? editIntensity : intensity, type: "intensity", state: "intensity" },
        { question: "SITUATION", response: editing ? editSituation : situation, type: "input", state: "situation" },
        { question: "WHO I WAS WITH", response: editing ? editWhoIWasWith : who_i_was_with, type: "input", state: "who_i_was_with" },
        { question: "PRIMARY THOUGHT", response: editing ? editPrimaryThought : primary_thought, type: "input", state: "primary_thought" },
        { question: "COGNITIVE DISTORTIONS", response: editing ? editCognitiveDistortions : cognitive_distortions, type: "input", state: "cognitive_distortions" }
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