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
        const cognitiveDistortions = findCognitiveDistortions();
        
        const newMoodJournal = {
            feeling: moodJournal.feeling,
            intensity: moodJournal.intensity, 
            situation: moodJournal.situation, 
            who_i_was_with: moodJournal.whoIWasWith,
            primary_thought: moodJournal.primaryThought,
            cognitive_distortions: cognitiveDistortions
        };
        postMoodJournal(newMoodJournal);
        setJournalComplete(true);
        resetMoodJournal();
    };

    const deleteMoodJournal = (journalId) => {
        destroyMoodJournal(journalId);
        removeMoodJournal(journalId);
        resetMoodJournal();
    };

    const findCognitiveDistortions = () => {
        const selectedCognitiveDistortions = moodJournal.cognitiveDistortions;
        const options = moodJournalQuestions[4].options;
        const text = options.filter(option => selectedCognitiveDistortions.includes(option.id));
        const cognitiveDistortions = text.map((option) => option.option);
        return String(cognitiveDistortions).replace(/,/g, ', ');
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
        replaceMoodJournal(journalId);
    };

    const removeMoodJournal = (journalId) => {
        moodJournals.filter(
            (journal) => journal.id !== journalId
        );
    };

    const replaceMoodJournal = (journalId) => {
        const copyMoodJournals = [...moodJournals];
        //removeMoodJournal(journalId);
        //moodJournals.unshift(moodJournal);
        const updatedMoodJournals = copyMoodJournals.map(journal => journal.id !== journalId ? journal : moodJournal);
        setMoodJournals(updatedMoodJournals);
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