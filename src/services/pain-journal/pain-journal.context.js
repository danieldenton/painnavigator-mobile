import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { painJournalQuestions } from "../../features/pain-journal/data/pain-journal-question-data.json";
import { destroyPainJournal, getPainJournals, patchPainJournal, postPainJournal } from "./pain-journal.service";
import { AuthenticationContext } from "../authentication/authentication.context";


export const PainJournalContext = createContext();

export const PainJournalContextProvider = ({ children }) => {
    const [changes, setChanges] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const currentPageData = painJournalQuestions[currentPage];
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
    const [painGraphData, setPainGraphData] = useState({});
    const { user } = useContext(AuthenticationContext);

    useEffect(() => {
        if (!painJournals || painJournals.length < 1) {
            // Set to false by default if desired:
            setJournaledToday(false);
            return;
          }
      
          const lastIndex = painJournals.length - 1;
          const lastJournalDate = painJournals[lastIndex].date;
          setJournaledToday(Boolean(lastJournalDate));
    }, [painJournals]);  

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
            intensity_after: painJournal.intensityAfter,
            date_time_value: Date.now(),
        }
        postPainJournal(user.user.uid, newPainJournal, setPainJournals);
        setTimeout(() => {resetPainJournal(false)}, 1000);
    };

    const deletePainJournal = () => {
        const id = reviewJournal.id;
        destroyPainJournal(id);
        const newPainJournals = painJournals.filter(journal => journal.id !== id)
        setPainJournals(newPainJournals);
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
        setCurrentPage(0);
    };

    const editJournal = (change, state) => {
        setReviewJournal(prevJournal => (
            {
                ...prevJournal,
                [state]: change
            }
        ));
    };

    const saveEdits = () => {
        const newJournals = painJournals.map(
            journal => journal.id === reviewJournal.id ?
                {
                    ...journal,
                    reviewJournal
                }
                :
                journal
        );
        setPainJournals(newJournals);
        patchPainJournal(reviewJournal.id, reviewJournal, setPainJournals);
    };

    // const saveJournals = async (value) => {
    //     try {
    //       const jsonValue = JSON.stringify(value);
    //       await AsyncStorage.setItem("@pain_journals", jsonValue);
    //     } catch (e) {
    //       console.log("error storing pain journals", e);
    //     }
    // };
    
    // const loadJournals = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem("@pain_journals");
    //         if (value !== null) {
    //         setPainJournals(JSON.parse(value));
    //         }
    //     } catch (e) {
    //         console.log("error loading pain journals", e);
    //     }
    // };

    

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
                painGraphData: [],
                previousPage,
                resetPainJournal,
                reviewJournal,
                saveEdits,
                setPainGraphData,
                setPainJournal,
                setPainJournals,
                setReviewJournal
            }}
        >
            {children}
        </PainJournalContext.Provider>
    );
};