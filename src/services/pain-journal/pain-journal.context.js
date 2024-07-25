import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { painJournalQuestions } from "../../features/pain-journal/data/pain-journal-question-data.json";
import { AuthenticationContext } from "../authentication/authentication.context";
import { formatDate, timeZonedTodaysDate } from "../../utils";

export const PainJournalContext = createContext();

export const PainJournalContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
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
    intensityAfter: 5,
  });
  const [reviewJournal, setReviewJournal] = useState({});
  const { uid } = useContext(AuthenticationContext);
  const lastPainJournal = formatDate(painJournals[0]?.date_time_value);
  const painJournalToday = lastPainJournal === timeZonedTodaysDate;

  const getPainJournals = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/api/v2/pain_journals`, {
        params: { uid: uid },
      });
      setPainJournals(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  async function postPainJournal(newPainJournal) {
    try {
      const response = await axios.post(`${API_URL}/api/v1/pain_journals`, {
        pain_journal: newPainJournal,
        uid: uid,
      });
      const data = response.data.data.attributes;
      setPainJournals((prevJournals) => [data, ...prevJournals]);
    } catch (error) {
      console.error(error);
    }
  }

  async function patchPainJournal(updatedJournal) {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v1/pain_journals/${journalId}`,
        { pain_journal: painJournal }
      );
      const data = response.data.data.attributes;
      setPainJournals((prevJournals) =>
        prevJournals.map((journal) =>
          journal.id === updatedJournal.id ? data : journal
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  const destroyPainJournal = (journalId) => {
    axios
      .delete(`${API_URL}/api/v1/pain_journals/${journalId}`)
      .then((response) => {});
  };

  const cancelEdits = () => {
    setReviewJournal({});
    setChanges("");
  };

  const changeEntry = (change, state) => {
    setPainJournal((journal) => ({
      ...journal,
      [state]: change,
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
    };
    postPainJournal(newPainJournal);
    setTimeout(() => {
      resetPainJournal(false);
    }, 1000);
  };

  const deletePainJournal = () => {
    const id = reviewJournal.id;
    destroyPainJournal(id);
    const newPainJournals = painJournals.filter((journal) => journal.id !== id);
    setPainJournals(newPainJournals);
  };

  const findCopingStrategies = () => {
    const selectedCopingStrategies = painJournal.copingStrategies;
    const options = painJournalQuestions[2].options;
    const text = options.filter((option) =>
      selectedCopingStrategies.includes(option.id)
    );
    const copingStrategies = text.map((option) => option.option);
    return String(copingStrategies).replace(/,/g, ", ");
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const resetPainJournal = () => {
    setPainJournal({
      intensity: 5,
      situation: "",
      feeling: "",
      whoIWasWith: "",
      copingStrategies: new Array(),
      notes: "",
      intensityAfter: 5,
    });
    setCurrentPage(0);
  };

  const editJournal = (change, state) => {
    setReviewJournal((prevJournal) => ({
      ...prevJournal,
      [state]: change,
    }));
  };

  const saveEdits = () => {
    const newJournals = painJournals.map((journal) =>
      journal.id === reviewJournal.id
        ? {
            ...journal,
            reviewJournal,
          }
        : journal
    );
    patchPainJournal(reviewJournal);
  };

  return (
    <PainJournalContext.Provider
      value={{
        getPainJournals,
        cancelEdits,
        changes,
        changeEntry,
        completePainJournal,
        currentPage,
        currentPageData,
        deletePainJournal,
        editJournal,
        nextPage,
        painJournals,
        painJournal,
        previousPage,
        resetPainJournal,
        reviewJournal,
        saveEdits,
        setPainJournal,
        setPainJournals,
        setReviewJournal,
        painJournalToday,
      }}
    >
      {children}
    </PainJournalContext.Provider>
  );
};
