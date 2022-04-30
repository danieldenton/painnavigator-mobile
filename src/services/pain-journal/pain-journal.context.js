import React, { useState, createContext } from "react";
import { painJournalQuestions } from "../../features/pain-journal/data/pain-journal-question-data.json";
import { 
    destroyPainJournal, 
    getPainJournals, 
    patchPainJournal, 
    postPainJournal 
} from "./pain-journal.service";

export const PainJournalContext = createContext();

export const PainJournalContextProvider = ({ children }) => {
    const [editingPainJournal, setEditingPainJournal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const currentPageData = painJournalQuestions[currentPage - 1];
    const [journalComplete, setJournalComplete] = useState(false);
    const [painJournals, setPainJournals] = useState({});
    const [painJournal, setPainJournal] = useState({
        intensity: 5, 
        situation: "", 
        feeling: "", 
        whoIWasWith: "", 
        copingStrategies: new Array(), 
        notes: "", 
        intensityAfter: 5
    });

    const changeEntry = (change, state) => {
        setPainJournal(journal => ({
            ...journal,
            [state]: change
        }));
    };

    const completePainJournal = () => {
        const copingStrategies = findCopingStrategies();

        const newPainJournal = {
            pain_score: painJournal.intensity,
            pain_setting: painJournal.situation, 
            pain_feeling: painJournal.feeling, 
            who_with: painJournal.whoIWasWith, 
            coping_strategies: copingStrategies, 
            other_notes: painJournal.notes, 
            pain_after: painJournal.intensityAfter
        }
        postPainJournal(newPainJournal);
        setJournalComplete(true);
        resetPainJournal();
    };

    const deletePainJournal = (journalId) => {
        destroyPainJournal(journalId);
    };

    const findCopingStrategies = () => {
        const selectedCopingStrategies = painJournal.copingStrategies;
        const options = painJournalQuestions[2].options;
        const text = options.filter(option => selectedCopingStrategies.includes(option.id));
        const copingStrategies = text.map((option) => option.option);
        return String(copingStrategies).replace(/,/g, ', ');
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
            intensity: 5, 
            situation: "", 
            feeling: "", 
            whoIWasWith: "", 
            copingStrategies: new Array(), 
            notes: "", 
            intensityAfter: 5
        });
        setCurrentPage(1);
        setEditingPainJournal(false);
    };

    const updatePainJournal = (journalId) => {
        const updatedPainJournal = {
            pain_score: painJournal.intensity,
            pain_setting: painJournal.situation, 
            pain_feeling: painJournal.feeling, 
            who_with: painJournal.whoIWasWith, 
            coping_strategies: String(painJournal.copingStrategies), 
            other_notes: painJournal.notes, 
            pain_after: painJournal.intensityAfter
        }
        patchPainJournal(journalId, updatedPainJournal);
    };

    return (
        <PainJournalContext.Provider
            value={{
                editingPainJournal,
                changeEntry,
                completePainJournal,
                currentPage,
                currentPageData,
                deletePainJournal,
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