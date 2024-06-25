import React, { useState, createContext } from "react";
import { patchUser } from "../authentication/authentication.service";

export const OutcomeContext = createContext();

export const OutcomeContextProvider = ({ children }) => {
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

  const completeProgram = (uid) => {
    const data = {
      completed_program: true,
      recommendation: outcomeData.recommendation,
      outcome_enjoyment_of_life: outcomeData.enjoymentOfLife,
      outcome_activity_interference: outcomeData.activityInterference,
      outcome_anxious: outcomeData.anxious,
      outcome_unable_to_stop_worrying: outcomeData.unableToStopWorrying,
      outcome_little_interest_or_pleasure:
        outcomeData.littleInterestOrPleasure,
      outcome_depressed: outcomeData.depressed,
    }
    patchUser(uid, data);
    setCompletedProgram(true);
  };

  return (
    <OutcomeContext.Provider
      value={{
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
