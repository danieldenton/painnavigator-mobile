import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { painJournalQuestions } from "../../features/pain-journal/data/pain-journal-question-data.json";
import { destroyPainJournal, getPainJournals, patchPainJournal, postPainJournal } from "./pain-journal.service";
import startOfToday from 'date-fns/startOfToday';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

export const PainJournalContext = createContext();

export const PainJournalContextProvider = ({ children }) => {
    const [changes, setChanges] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const currentPageData = painJournalQuestions[currentPage - 1];
    const [painJournals, setPainJournals] = useState([]);
    const [painJournal, setPainJournal] = useState({
        intensity: 5, 
        situation: "", 
        feeling: "", 
        whoIWasWith: "", 
        copingStrategies: new Array(), 
        notes: "", 
        intensityAfter: 5
    });
    const [reviewJournal, setReviewJournal] = useState({});
    const [journaledToday, setJournaledToday] = useState(false);

    useEffect(() => {
        const lastIndex = painJournals?.length - 1;
        const lastJournalDate = painJournals[lastIndex]?.attributes.date;

        setJournaledToday(lastJournalDate);
    }, []);

    const cancelEdits = () => {
        setReviewJournal({});
        setChanges("");
    };

    const changeEntry = (change, state) => {
        setPainJournal(journal => ({
            ...journal,
            [state]: change
        }));
    };

    const completePainJournal = () => {
        const copingStrategies = findCopingStrategies();

        const newPainJournal = {
            intensity: painJournal.intensity,
            situation: painJournal.situation, 
            feeling: painJournal.feeling, 
            who_i_was_with: painJournal.whoIWasWith, 
            coping_strategies: copingStrategies, 
            notes: painJournal.notes, 
            intensity_after: painJournal.intensityAfter
        }
        postPainJournal(newPainJournal, setPainJournals);
        setTimeout(() => {resetPainJournal(false)}, 1000);
    };

    const deletePainJournal = () => {
        const id = reviewJournal.id;
        destroyPainJournal(id);
        const newPainJournals = painJournals.filter(journal => journal.attributes.id !== id)
        setPainJournals(newPainJournals);
    };

    const editJournal = (change, state) => {
        setReviewJournal(prevJournal => (
            {
                ...prevJournal,
                [state]: change
            }
        ));
        setChanges(change);
    };

    const findCopingStrategies = () => {
        const selectedCopingStrategies = painJournal.copingStrategies;
        const options = painJournalQuestions[2].options;
        const text = options.filter(option => selectedCopingStrategies.includes(option.id));
        const copingStrategies = text.map((option) => option.option);
        return String(copingStrategies).replace(/,/g, ', ');
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
    };

    const saveEdits = () => {
        const newJournals = painJournals.map(
            journal => journal.attributes.id === reviewJournal.id ?
                {
                    ...journal,
                    attributes: reviewJournal
                }
                :
                journal
        );
        setPainJournals(newJournals);
        updatePainJournal();
        setChanges("");
    };

    const saveJournals = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@pain_journals", jsonValue);
        } catch (e) {
          console.log("error storing", e);
        }
    };
    
    const loadJournals = async () => {
        try {
            const value = await AsyncStorage.getItem("@pain_journals");
            if (value !== null) {
            setPainJournals(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading", e);
        }
    };

    const updatePainJournal = () => {
        const updatedPainJournal = {
            intensity: reviewJournal.intensity,
            situation: reviewJournal.situation, 
            feeling: reviewJournal.feeling, 
            who_i_was_with: reviewJournal.whoIWasWith, 
            coping_strategies: String(reviewJournal.copingStrategies), 
            notes: reviewJournal.notes, 
            intensity_after: reviewJournal.intensityAfter
        }
        patchPainJournal(reviewJournal.id, updatedPainJournal);
    };

    useEffect(() => {
        loadJournals();
      }, []);
    
    useEffect(() => {
    saveJournals(painJournals);
    }, [painJournals]);

    return (
        <PainJournalContext.Provider
            value={{
                cancelEdits,
                changes,
                changeEntry,
                completePainJournal,
                currentPage,
                currentPageData,
                deletePainJournal,
                editJournal,
                journaledToday,
                nextPage,
                painJournals, 
                painJournal,
                previousPage,
                resetPainJournal,
                reviewJournal,
                saveEdits,
                setPainJournal,
                setReviewJournal,
                updatePainJournal
            }}
        >
            {children}
        </PainJournalContext.Provider>
    );
};