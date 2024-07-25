import React, { createContext, useState, useContext } from "react";
import { painJournalQuestions } from "../../features/pain-journal/data/pain-journal-question-data.json";
import {
  getPainJournals,
  postPainJournal,
  patchPainJournal,
} from "./pain-journal.service";
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

  const loadPainJournals = async () => {
    try {
      setIsLoading(true);
      const data = await getPainJournals(uid);
      setPainJournals(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

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

  const completePainJournal = async () => {
    try {
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
      const data = await postPainJournal(uid, newPainJournal);
      setPainJournals((prevJournals) => [data, ...prevJournals]);
      setTimeout(() => {
        resetPainJournal(false);
      }, 1000);
    } catch (err) {
      console.log(errr);
    }
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

  const saveEdits = async () => {
    try {
      const data = await patchPainJournal(reviewJournal);
      setPainJournals((prevJournals) =>
        prevJournals.map((journal) =>
          journal.id === reviewJournal.id ? data : journal
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PainJournalContext.Provider
      value={{
        loadPainJournals,
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
        isLoading,
      }}
    >
      {children}
    </PainJournalContext.Provider>
  );
};
