import React, { useState, createContext } from "react";
import { getPainJournals, patchPainJournal, postPainJournal } from "./pain-journal.service";
import { painJournalQuestions } from "../../features/pain-journal/data/pain-journal-question-data.json";

export const PainJournalContext = createContext();

export const PainJournalContextProvider = ({ children }) => {
    const [editingPainJournal, setEditingPainJournal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const currentPageData = painJournalQuestions[currentPage - 1];
    const [journalComplete, setJournalComplete] = useState(false);
    const [painJournals, setPainJournals] = useState({});
    const [painJournal, setPainJournal] = useState({
        score: 5, 
        setting: "", 
        feeling: "", 
        whoIWasWith: "", 
        copingStrategies: [], 
        notes: "", 
        painAfter: 5
    });

    const changeEntry = (change, state) => {
        setPainJournal(journal => ({
            ...journal,
            [state]: change
        }));
    };

    const completePainJournal = () => {
        const newPainJournal = {
            pain_score: painJournal.score,
            pain_setting: painJournal.setting, 
            pain_feeling: painJournal.feeling, 
            who_with: painJournal.whoIWasWith, 
            coping_strategies: String(painJournal.copingStrategies), 
            other_notes: painJournal.notes, 
            pain_after: painJournal.painAfter
        }
        postPainJournal(newPainJournal);
        setJournalComplete(true);
        resetPainJournal();
    };

    const loadPainJournals = () => {
        getPainJournals(setPainJournals);
    };

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const resetPainJournal = () => {
        setPainJournal({ 
            score: 5, 
            setting: "", 
            feeling: "", 
            whoIWasWith: "", 
            copingStrategies: [], 
            notes: "", 
            painAfter: 5
        });
        setCurrentPage(1);
        setEditingPainJournal(false);
    };

    const updatePainJournal = (journalId) => {
        patchPainJournal(journalId, painJournal);
    };

    return (
        <PainJournalContext.Provider
            value={{
                editingPainJournal,
                changeEntry,
                completePainJournal,
                currentPage,
                currentPageData,
                journalComplete, 
                painJournals, 
                painJournal,
                loadPainJournals,
                nextPage,
                previousPage,
                resetPainJournal,
                setEditingPainJournal,
                setJournalComplete,
                setPainJournal,
                updatePainJournal
            }}
        >
            {children}
        </PainJournalContext.Provider>
    );
};