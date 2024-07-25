import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { getSmartGoals } from "./smart-goal.service";
import { AuthenticationContext } from "../authentication/authentication.context";
import { formatDate } from "../../utils";

export const SmartGoalContext = createContext();

export const SmartGoalContextProvider = ({ children }) => {
  const [activeGoal, setActiveGoal] = useState(null);
  const [changes, setChanges] = useState("");
  const [reviewGoal, setReviewGoal] = useState(null);
  const [finishedGoals, setFinishedGoals] = useState([]);
  const [smartGoal, setSmartGoal] = useState({
    goal: "",
    steps: "",
    reward: "",
  });
  const [smartGoalUpdate, setNewSmartGoalUpdate] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const { uid } = useContext(AuthenticationContext);
  const lastSmartGoalUpdate = formatDate(
    activeGoal?.goal_updates[0]?.date_time_value
  );

  const parseSmartGoalData = (data) => {
    const goal = data.find((goal) => goal.status === "active");
    const finished = data.filter((goal) => goal.status === "finished");
    return [goal, finished];
  };

  const loadSmartGoals = async () => {
    try {
      const data = await getSmartGoals(uid);
      const [goal, finished] = parseSmartGoalData(data);
      console.log;
      setActiveGoal(goal);
      setFinishedGoals(finished);
    } catch (err) {
      console.log(err);
    }
  };

  async function postSmartGoal() {
    try {
      const response = await axios.post(`${API_URL}/api/v1/smart_goals`, {
        smart_goal: smartGoal,
        uid: uid,
      });
      const data = response.data.data.attributes;
      setActiveGoal(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function postSmartGoalUpdate(id, smartGoalUpdate) {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/smart_goal_updates`,
        {
          smart_goal_id: id,
          smart_goal_update: smartGoalUpdate,
        }
      );
      const data = response.data.data.attributes;
      setActiveGoal(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function patchSmartGoal(smartGoal) {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v1/smart_goals/${smartGoal.id}`,
        smartGoal
      );
      return response.data.data.attributes;
    } catch (error) {
      console.error(error);
    }
  }

  const patchSmartGoalUpdate = async (smartGoalUpdate) => {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v1/smart_goal_updates/${smartGoalUpdate.id}`,
        smartGoalUpdate
      );
      return response.data.data.attributes;
    } catch (error) {
      console.error(error);
    }
  };

  const destroyGoal = (goalId) => {
    axios
      .delete(`${API_URL}/api/v1/smart_goals/${goalId}`)
      .then((response) => {});
  };

  const cancelEdits = () => {
    setReviewGoal(activeGoal);
    setChanges("");
  };

  const changeSmartGoal = (change, state) => {
    setSmartGoal((prevGoal) => ({
      ...prevGoal,
      [state]: change,
    }));
  };

  const changeUpdate = (change) => {
    setNewSmartGoalUpdate(change);
  };

  const createSmartGoal = () => {
    postSmartGoal(uid);
  };

  const createSmartGoalUpdate = () => {
    const id = activeGoal.id;
    const updateWithId = {
      smart_goal_id: parseInt(id),
      goal_update: smartGoalUpdate,
    };
    postSmartGoalUpdate(id, updateWithId);
    setNewSmartGoalUpdate("");
  };

  const deleteGoal = () => {
    destroyGoal(activeGoal.id);
    setActiveGoal(null);
  };

  const editGoal = (change, state) => {
    setReviewGoal((prevGoal) => ({
      ...prevGoal,
      [state]: change,
    }));
  };

  const editGoalUpdate = (change, idx) => {
    setReviewGoal((prevGoal) => ({
      ...prevGoal,
      goalUpdates: (prevGoal.goal_updates[idx].goal_update = change),
    }));
  };

  const saveEdits = () => {
    setActiveGoal(reviewGoal);
    patchSmartGoal(reviewGoal);
    for (let i = 0; i < reviewGoal.goal_updates.length; i++) {
      patchSmartGoalUpdate(reviewGoal.goal_updates[i]);
    }
  };

  const endJournalDate = () => {
    const date = formatDate(Date.now());
    setReviewGoal((prevState) => ({
      ...prevState,
      end_date: date,
      status: "finished",
    }));
  };

  const finishGoal = () => {
    setFinishedGoals((prevGoals) => [reviewGoal, ...prevGoals]);
    patchSmartGoal(reviewGoal);
    setActiveGoal(null), 10000;
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const resetSmartGoal = () => {
    setSmartGoal({
      goal: "",
      steps: "",
      reward: "",
    });
    setCurrentPage(0);
  };

  useEffect(() => {
    setReviewGoal(activeGoal);
  }, [activeGoal]);

  return (
    <SmartGoalContext.Provider
      value={{
        loadSmartGoals,
        postSmartGoal,
        activeGoal,
        changes,
        changeUpdate,
        cancelEdits,
        deleteGoal,
        editGoal,
        editGoalUpdate,
        changeSmartGoal,
        createSmartGoal,
        createSmartGoalUpdate,
        currentPage,
        setCurrentPage,
        finishGoal,
        finishedGoals,
        nextPage,
        previousPage,
        saveEdits,
        smartGoalUpdate,
        smartGoal,
        resetSmartGoal,
        reviewGoal,
        endJournalDate,
        setFinishedGoals,
        setActiveGoal,
        lastSmartGoalUpdate,
      }}
    >
      {children}
    </SmartGoalContext.Provider>
  );
};
