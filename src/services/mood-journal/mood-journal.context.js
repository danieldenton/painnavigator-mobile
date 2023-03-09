import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { moodJournalQuestions } from "../../features/mood-journal/data/mood-journal-question-data.json";
import { destroyMoodJournal, getMoodJournals, patchMoodJournal, postMoodJournal } from "./mood-journal.service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const MoodJournalContext = createContext();

export const MoodJournalContextProvider = ({ children }) => {
    const [changes, setChanges] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const currentPageData = moodJournalQuestions[currentPage];
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
    const { user } = useContext(AuthenticationContext);

    useEffect(() => {
        const lastIndex = moodJournals?.length - 1;
        const lastJournalDate = moodJournals[lastIndex]?.date;
        setJournaledToday(lastJournalDate);
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
            cognitive_distortions: cognitiveDistortions,
            date_time_value: Date.now(),
        };
        postMoodJournal(user.user.uid, newMoodJournal, setMoodJournals);
        setTimeout(() => {resetMoodJournal(false)}, 1000);
    };

    const deleteMoodJournal = () => {
        const id = reviewJournal.id;
        destroyMoodJournal(id);
        const newMoodJournals = moodJournals.filter(journal => journal.id !== id);
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
        setCurrentPage(0);
    };

    const updateMoodJournal = () => {
        const updatedMoodJournal = {
            feeling: reviewJournal.feeling,
            intensity: reviewJournal.intensity, 
            situation: reviewJournal.situation, 
            who_i_was_with: reviewJournal.who_i_was_with,
            primary_thought: reviewJournal.primary_thought,
            cognitive_distortions: reviewJournal.cognitive_distortions,
        };
        patchMoodJournal(reviewJournal.id, updatedMoodJournal, setMoodJournals);
    };

    const saveEdits = () => {
        const newJournals = moodJournals.map(
            journal => journal.id === reviewJournal.id ?
                {
                    ...journal,
                    reviewJournal
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
          console.log("error storing mood journals", e);
        }
    };
    
    const loadJournals = async () => {
        try {
            const value = await AsyncStorage.getItem("@mood_journals");
            if (value !== null) {
            setMoodJournals(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading mood journals", e);
        }
    };

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
                setMoodJournals,
                setReviewJournal,
                updateMoodJournal
            }}
        >
            {children}
        </MoodJournalContext.Provider>
    );
};