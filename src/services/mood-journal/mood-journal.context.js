import React, { createContext, useState, useContext } from "react";
import { moodJournalQuestions } from "../../features/mood-journal/data/mood-journal-question-data.json";
import {
  getMoodJournals,
  postMoodJournal,
  patchMoodJournal,
  destroyMoodJournal,
} from "./mood-journal.service";
import { AuthenticationContext } from "../authentication/authentication.context";
import { formatDate, timeZonedTodaysDate } from "../../utils";

export const MoodJournalContext = createContext();

export const MoodJournalContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
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
    cognitiveDistortions: new Array(),
  });
  const [reviewJournal, setReviewJournal] = useState({});
  const { uid } = useContext(AuthenticationContext);
  const lastMoodJournal = formatDate(moodJournals[0]?.date_time_value);
  const moodJournalToday = lastMoodJournal === timeZonedTodaysDate;

  const loadMoodJournals = async () => {
    try {
      setIsLoading(true);
      const data = await getMoodJournals(uid);
      setMoodJournals(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelEdits = () => {
    setReviewJournal({});
    setChanges("");
  };

  const changeEntry = (change, state) => {
    setMoodJournal((journal) => ({
      ...journal,
      [state]: change,
    }));
  };

  const completeMoodJournal = async () => {
    try {
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
      const data = await postMoodJournal(uid, newMoodJournal);
      setMoodJournals((prevJournals) => [...prevJournals, data]);
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      resetMoodJournal(false);
    }, 1000);
  };

  const deleteMoodJournal = () => {
    destroyMoodJournal();
    const newMoodJournals = moodJournals.filter((journal) => journal.id !== id);
    setMoodJournals(newMoodJournals);
  };

  const editJournal = (change, state) => {
    setReviewJournal((prevJournal) => ({
      ...prevJournal,
      [state]: change,
    }));
    setChanges(change);
  };

  const findCognitiveDistortions = () => {
    const selectedCognitiveDistortions = moodJournal.cognitiveDistortions;
    const options = moodJournalQuestions[4].options;
    const text = options.filter((option) =>
      selectedCognitiveDistortions.includes(option.id)
    );
    const cognitiveDistortions = text.map((option) => option.option);
    return String(cognitiveDistortions).replace(/,/g, ", ");
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const resetMoodJournal = () => {
    setMoodJournal({
      feeling: "",
      intensity: 5,
      situation: "",
      whoIWasWith: "",
      primaryThought: "",
      cognitiveDistortions: new Array(),
    });
    setCurrentPage(0);
  };

  const saveEdits = async () => {
    try {
      const data = await patchMoodJournal(reviewJournal);
      setMoodJournals((prevJournals) =>
        prevJournals.map((journal) =>
          journal.id === reviewJournal.id ? data : journal
        )
      );
      setChanges("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MoodJournalContext.Provider
      value={{
        loadMoodJournals,
        isLoading,
        cancelEdits,
        changes,
        changeEntry,
        completeMoodJournal,
        currentPage,
        currentPageData,
        deleteMoodJournal,
        editJournal,
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
        moodJournalToday,
      }}
    >
      {children}
    </MoodJournalContext.Provider>
  );
};
