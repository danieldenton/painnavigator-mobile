import React, { useState, createContext } from "react";
import { getPainJournals, patchPainJournal, postPainJournal } from "./pain-journal.service";
import { painJournalQuestions } from "../../features/painJournal/data/pain-journal-question-data.json";

export const PainJournalContext = createContext();

export const PainJournalContextProvider = ({ children }) => {
    const [journalComplete, setJournalComplete] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [painJournals, setPainJournals] = useState({});
    const [painJournalsLoaded, setPainJournalsLoaded] = useState(false);
    const [newPainJournal, setNewPainJournal] = useState({
        painScore: 5, 
        painSetting: "", 
        painFeeling: "", 
        whoWith: "", 
        copingStrategies: [], 
        otherNotes: "", 
        painAfter: 5
    });

    const currentQuestionData = painJournalQuestions.find(question => question.id === currentQuestion);

    const resetPainJournal = () => {
        setNewPainJournal({ painScore: 5, 
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
        postPainJournal(newPainJournal);
        setJournalComplete(true);
        resetPainJournal();
    };

    return (
        <PainJournalContext.Provider
            value={{
                newPainJournal,
                setNewPainJournal,
                currentQuestion, 
                setCurrentQuestion,
                currentQuestionData,
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