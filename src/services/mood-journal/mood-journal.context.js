import React, { useState, createContext } from "react";
import { moodJournalQuestions } from "../../features/mood-journal/data/mood-journal-question-data.json";
import { 
    destroyMoodJournal, 
    getMoodJournals, 
    patchMoodJournal, 
    postMoodJournal 
} from "./mood-journal.service";

export const MoodJournalContext = createContext();

export const MoodJournalContextProvider = ({ children }) => {
    const [editingMoodJournal, setEditingMoodJournal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const currentPageData = moodJournalQuestions[currentPage - 1];
    const [journalComplete, setJournalComplete] = useState(false);
    const [moodJournals, setMoodJournals] = useState({});
    const [moodJournal, setMoodJournal] = useState({
        feeling: "", 
        intensity: 5, 
        situation: "", 
        whoIWasWith: "", 
        primaryThought: "", 
        cognitiveDistortions: new Array()
    });

    const changeEntry = (change, state) => {
        setMoodJournal(journal => ({
            ...journal,
            [state]: change
        }));
    };

    const completeMoodJournal = () => {
        const newMoodJournal = {
            feeling: moodJournal.feeling,
            intensity: moodJournal.intensity, 
            situation: moodJournal.situation, 
            who_i_was_with: moodJournal.whoIWasWith,
            primary_thought: moodJournal.primaryThought,
            cognitive_distortions: String(moodJournal.cognitiveDistortions)
        };
        postMoodJournal(newMoodJournal);
        setJournalComplete(true);
        resetMoodJournal();
    };

    const deleteMoodJournal = (journalId) => {
        destroyMoodJournal(journalId);
    };
    
    const loadMoodJournals = () => {
        getMoodJournals(setMoodJournals);
    };

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const resetMoodJournal = () => {
        setMoodJournal({ 
            feeling: "", 
            intensity: 5, 
            situation: "", 
            whoIWasWith: "", 
            primaryThought: "", 
            cognitiveDistortions: new Array() 
        });
        setCurrentPage(1);
        setEditingMoodJournal(false);
    };

    const updateMoodJournal = (journalId) => {
        const updatedMoodJournal = {
            feeling: moodJournal.feeling,
            intensity: moodJournal.intensity, 
            situation: moodJournal.situation, 
            who_i_was_with: moodJournal.whoIWasWith,
            primary_thought: moodJournal.primaryThought,
            cognitive_distortions: String(moodJournal.cognitiveDistortions)
        };
        patchMoodJournal(journalId, updatedMoodJournal);
    };

    return (
        <MoodJournalContext.Provider
            value={{
                editingMoodJournal,
                changeEntry,
                completeMoodJournal,
                currentPage,
                currentPageData,
                deleteMoodJournal,
                journalComplete, 
                moodJournals, 
                moodJournal,
                loadMoodJournals,
                nextPage,
                previousPage,
                resetMoodJournal,
                setEditingMoodJournal,
                setJournalComplete,
                setMoodJournal,
                updateMoodJournal
            }}
        >
            {children}
        </MoodJournalContext.Provider>
    );
};