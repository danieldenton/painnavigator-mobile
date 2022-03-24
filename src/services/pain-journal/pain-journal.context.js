import React, { useState, createContext } from "react";
import { getPainJournals, patchPainJournal, postPainJournal } from "./pain-journal.service";
import { painJournalQuestions } from "../../features/painJournal/data/pain-journal-question-data.json";

export const PainJournalContext = createContext();

export const PainJournalContextProvider = ({ children }) => {
    const [journalComplete, setJournalComplete] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [painJournal, setPainJournal] = useState({
        painScore: 5, 
        painSetting: "", 
        painFeeling: "", 
        whoWith: "", 
        copingStrategies: [], 
        otherNotes: "", 
        painAfter: 5
    });
    const [painJournals, setPainJournals] = useState({});
    const [painJournalsLoaded, setPainJournalsLoaded] = useState(false);
    
    const nextQuestion = () => {
        setCurrentQuestion((prevQuestion) => { return ( prevQuestion + 1 ) });
    };

    const previousQuestion = () => {
        setCurrentQuestion((prevQuestion) => { return ( prevQuestion - 1 ) });
    };

    const resetPainJournal = () => {
        setPainJournal({ painScore: 5, 
            painSetting: "", 
            painFeeling: "", 
            whoWith: "", 
            copingStrategies: [], 
            otherNotes: "", 
            painAfter: 5
        });
    };

    const loadPainJournals = () => {
        getPainJournals(setPainJournals, setPainJournalsLoaded);
    };

    const updatePainJournal = (journalId, journalUpdate) => {
        patchPainJournal(journalId, journalUpdate);
        getPainJournals(setPainJournals, setPainJournalsLoaded);
    };

    const completePainJournal = () => {  
        postPainJournal(painJournal);
        setJournalComplete(true);
        resetPainJournal();
    };

    const currentQuestionData = painJournalQuestions.find(question => question.id === currentQuestion);

    return (
        <PainJournalContext.Provider
            value={{
                painJournal,
                setPainJournal,
                currentQuestion, 
                setCurrentQuestion,
                currentQuestionData,
                nextQuestion,
                previousQuestion,
                journalComplete, 
                setJournalComplete,
                completePainJournal,
                resetPainJournal,
                loadPainJournals,
                painJournals,
                painJournalsLoaded,
                updatePainJournal
            }}
        >
            {children}
        </PainJournalContext.Provider>
    );
};