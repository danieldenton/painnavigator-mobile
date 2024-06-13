import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { moodJournalQuestions } from "../features/mood-journal/data/mood-journal-question-data.json";
import { AuthenticationContext } from "./authentication/authentication.context";
import { formatDate, timeZonedTodaysDate } from "../utils";

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
    cognitiveDistortions: new Array(),
  });
  const [reviewJournal, setReviewJournal] = useState({});
  const { uid } = useContext(AuthenticationContext);
  const lastMoodJournal = formatDate(moodJournals[0]?.date_time_value);
  const moodJournalToday = lastMoodJournal === timeZonedTodaysDate;

  const getMoodJournals = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v2/mood_journals`, {
        params: { uid: uid },
      });
      setMoodJournals(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  async function postMoodJournal(newMoodJournal) {
    try {
      const response = await axios.post(`${API_URL}/api/v1/mood_journals`, {
        mood_journal: newMoodJournal,
        uid: uid,
      });
      const data = response.data.data.attributes;
      setMoodJournals((prevJournals) => [data, ...prevJournals]);
    } catch (error) {
      console.error(error);
    }
  }

  async function patchMoodJournal() {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v1/mood_journals/${reviewJournal.id}`,
        { mood_journal: reviewJournal }
      );
      const data = response.data.data.attributes;
      setMoodJournals((prevJournals) =>
        prevJournals.map((journal) =>
          journal.id === reviewJournal.id ? data : journal
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  const destroyMoodJournal = () => {
    axios
      .delete(`${API_URL}/api/v1/mood_journals/${reviewJournal.id}`)
      .then((response) => {});
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
    postMoodJournal(newMoodJournal);
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

  const saveEdits = () => {
    const newJournals = moodJournals.map((journal) =>
      journal.id === reviewJournal.id
        ? {
            ...journal,
            reviewJournal,
          }
        : journal
    );
    setMoodJournals(newJournals);
    patchMoodJournal();
    setChanges("");
  };

  return (
    <MoodJournalContext.Provider
      value={{
        getMoodJournals,
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
