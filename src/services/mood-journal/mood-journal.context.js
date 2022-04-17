import React, { useEffect, useState, createContext } from "react";
import { getMoodJournals, patchMoodJournal, postMoodJournal } from "./mood-journal.service";
import { moodJournalQuestions } from "../../features/mood-journal/data/mood-journal-question-data.json";

export const MoodJournalContext = createContext();

export const MoodJournalContextProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const currentPageData = moodJournalQuestions[currentPage - 1];
    const [journalComplete, setJournalComplete] = useState(false);
    const [moodJournals, setMoodJournals] = useState({});
    const [moodJournalEntry, setMoodJournalEntry] = useState({
        feeling: "", 
        intensity: 5, 
        situation: "", 
        whoIWasWith: "", 
        primaryThought: "", 
        cognitiveDistortions: [] 
    });

    const changeEntry = (change, state) => {
        setMoodJournalEntry(journal => ({
            ...journal,
            [state]: change
        }));
    };

    const completeMoodJournal = () => {
        const newMoodJournal = {
            feeling: moodJournalEntry.feeling,
            intensity: moodJournalEntry.intensity, 
            situation: moodJournalEntry.situation, 
            who_i_was_with: moodJournalEntry.whoIWasWith,
            primary_thought: moodJournalEntry.primaryThought,
            cognitive_distortions: JSON.stringify(moodJournalEntry.cognitiveDistortions)
        };
        postMoodJournal(newMoodJournal);
        setJournalComplete(true);
        resetMoodJournal();
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
        setMoodJournalEntry({ 
            feeling: "", 
            intensity: 5, 
            situation: "", 
            whoIWasWith: "", 
            PrimaryThought: "", 
            CognitiveDistortions: [] 
        });
        setCurrentPage(1);
        setJournalComplete(false);
    };

    const updateMoodJournal = (journalId) => {
        patchMoodJournal(journalId, moodJournalEntry);
    };

    return (
        <MoodJournalContext.Provider
            value={{
                changeEntry,
                completeMoodJournal,
                currentPage,
                currentPageData,
                journalComplete, 
                moodJournals, 
                moodJournalEntry,
                loadMoodJournals,
                nextPage,
                previousPage,
                resetMoodJournal,
                setMoodJournalEntry,
                updateMoodJournal
            }}
        >
            {children}
        </MoodJournalContext.Provider>
    );
};