import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { moodJournalQuestions } from "../../features/mood-journal/data/mood-journal-question-data.json";
import { destroyMoodJournal, getMoodJournals, patchMoodJournal, postMoodJournal } from "./mood-journal.service";

export const MoodJournalContext = createContext();

export const MoodJournalContextProvider = ({ children }) => {
    const [changes, setChanges] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const currentPageData = moodJournalQuestions[currentPage - 1];
    const [moodJournals, setMoodJournals] = useState([]);
    const [moodJournal, setMoodJournal] = useState({
        feeling: "", 
        intensity: 5, 
        situation: "", 
        whoIWasWith: "", 
        primaryThought: "", 
        cognitiveDistortions: new Array()
    });
    const [reviewJournal, setReviewJournal] = useState({});
    const [journaledToday, setJournaledToday] = useState(false);

    useEffect(() => {

        if(moodJournals.length === 0) {
            return
        };

        const lastIndex = moodJournals.length - 1;
        const lastJournalDate = moodJournals[lastIndex].attributes.date;
        const today = format(new startOfToday(), 'M/d/yy');

        setJournaledToday(lastJournalDate === "6/3/22" ? true : false);
    }, []);

    const cancelEdits = () => {
        setReviewJournal({});
        setChanges("");
    };

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
        postMoodJournal(newMoodJournal, setMoodJournals);
        setTimeout(() => {resetMoodJournal(false)}, 1000);
    };

    const deleteMoodJournal = () => {
        const id = reviewJournal.id;
        destroyMoodJournal(id);
        const newMoodJournals = moodJournals.filter(journal => journal.attributes.id !== id);
        setMoodJournals(newMoodJournals);
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
    };

    const updateMoodJournal = () => {
        const updatedMoodJournal = {
            feeling: moodJournal.feeling,
            intensity: moodJournal.intensity, 
            situation: moodJournal.situation, 
            who_i_was_with: moodJournal.whoIWasWith,
            primary_thought: moodJournal.primaryThought,
            cognitive_distortions: String(moodJournal.cognitiveDistortions)
        };
        patchMoodJournal(reviewJournal.id, updatedMoodJournal);
    };

    const removeMoodJournal = (journalId) => {
        moodJournals.filter(
            (journal) => journal.id !== journalId
        );
    };

    const saveEdits = () => {
        const newJournals = moodJournals.map(
            journal => journal.attributes.id === reviewJournal.id ?
                {
                    ...journal,
                    attributes: reviewJournal
                }
                :
                journal
        );
        setMoodJournals(newJournals);
        updateMoodJournal();
        setChanges("");
    };

    const saveJournals = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@mood_journals", jsonValue);
        } catch (e) {
          console.log("error storing", e);
        }
    };
    
    const loadJournals = async () => {
        try {
            const value = await AsyncStorage.getItem("@mood_journals");
            if (value !== null) {
            setMoodJournals(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading", e);
        }
    };

    useEffect(() => {
        loadJournals();
      }, []);
    
    useEffect(() => {
    saveJournals(moodJournals);
    }, [moodJournals]);

    return (
        <MoodJournalContext.Provider
            value={{
                cancelEdits,
                changes,
                changeEntry,
                completeMoodJournal,
                currentPage,
                currentPageData,
                deleteMoodJournal,
                editJournal,
                journaledToday,
                loadMoodJournals,
                moodJournals, 
                moodJournal,
                nextPage,
                previousPage,
                resetMoodJournal,
                reviewJournal,
                saveEdits,
                setMoodJournal,
                setReviewJournal,
                updateMoodJournal
            }}
        >
            {children}
        </MoodJournalContext.Provider>
    );
};