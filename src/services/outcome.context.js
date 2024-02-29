import React, { useState, createContext } from "react";
import axios from "axios";
import { API_URL } from "@env";

export const OutcomeContext = createContext();

export const OutcomeContextProvider = ({ children }) => {
  const [outcomeStep, setOutcomeStep] = useState(0);
  const [outcomeData, setOutcomeData] = useState({
    recommendation: 5,
    enjoymentOfLife: 5,
    activityInterference: 5,
    anxious: "",
    unableToStopWorrying: "",
    littleInterestOrPleasure: "",
    depressed: "",
  });
  const [completedProgram, setCompletedProgram] = useState(false);

  const patchCompletedProgram = async (uid, outcomeData) => {
    try {
      await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
        completed_program: true,
        recommendation: outcomeData.recommendation,
        outcome_enjoyment_of_life: outcomeData.enjoymentOfLife,
        outcome_activity_interference: outcomeData.activityInterference,
        outcome_anxious: outcomeData.anxious,
        outcome_unable_to_stop_worrying: outcomeData.unableToStopWorrying,
        outcome_little_interest_or_pleasure:
          outcomeData.littleInterestOrPleasure,
        outcome_depressed: outcomeData.depressed,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const completeProgram = () => {
    patchCompletedProgram(uid, outcomeData);
    setCompletedProgram(true);
  };

  return (
    <OutcomeContext.Provider
      value={{
        outcomeStep,
        setOutcomeStep,
        setOutcomeData,
        outcomeData,
        completeProgram,
        setCompletedProgram,
        completedProgram,
      }}
    >
      {children}
    </OutcomeContext.Provider>
  );
};
