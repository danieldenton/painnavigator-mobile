import React, {useState, createContext } from "react";

import { getPainJournals, patchPainJournal, postPainJournal } from "./pain-journal.service";

import { painJournalQuestions } from "../../features/painJournal/data/pain-journal-question-data.json";

export const PainJournalContext = createContext();

export const PainJournalContextProvider = ({ children }) => {
    const [journalComplete, setJournalComplete] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [painScore, setPainScore] = useState(5);
    const [painSetting, setPainSetting] = useState("");
    const [painFeeling, setPainFeeling] = useState("");
    const [whoWith, setWhoWith] = useState("");
    const [copingStrategies, setCopingStrategies] = useState([]);
    const [otherNotes, setOtherNotes] = useState("");
    const [painAfter, setPainAfter] = useState(5);

    const [painJournals, setPainJournals] = useState({});
    const [painJournalsLoaded, setPainJournalsLoaded] = useState(false);
    
    const nextQuestion = () => {
        setCurrentQuestion((prevQuestion) => { return ( prevQuestion + 1 ) });
    };

    const previousQuestion = () => {
        setCurrentQuestion((prevQuestion) => { return ( prevQuestion - 1 ) });
    };

    const resetJournalState = () => {
        setPainScore(5);
        setPainSetting("");
        setPainFeeling("");
        setWhoWith("");
        setCopingStrategies([]);
        setOtherNotes("");
        setPainAfter(5);
        setCurrentQuestion(1);
    };

    const loadPainJournals = () => {
        getPainJournals(setPainJournals, setPainJournalsLoaded);
    };

    const updatePainJournal = (journalId, journalUpdate) => {
        patchPainJournal(journalId, journalUpdate);
        getPainJournals(setPainJournals, setPainJournalsLoaded);
    };

    const completePainJournal = () => {  
        postPainJournal(painScore, painSetting, painFeeling, whoWith, copingStrategies, otherNotes, painAfter);
        setJournalComplete(true);
        resetJournalState();
    };

    const currentQuestionData = painJournalQuestions.find(question => question.id === currentQuestion);

    return (
        <PainJournalContext.Provider
            value={{
                currentQuestionData,
                currentQuestion, setCurrentQuestion,
                painScore, setPainScore,
                painSetting, setPainSetting,
                painFeeling, setPainFeeling,
                whoWith, setWhoWith,
                copingStrategies, setCopingStrategies,
                otherNotes, setOtherNotes,
                painAfter, setPainAfter,
                nextQuestion,
                previousQuestion,
                journalComplete, setJournalComplete,
                resetJournalState,
                loadPainJournals,
                painJournals,
                painJournalsLoaded,
                updatePainJournal,
                completePainJournal
            }}
        >
            {children}
        </PainJournalContext.Provider>
    );
};