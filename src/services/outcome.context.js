import React, { useState, createContext } from "react";

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
        completedProgram
      }}
    >
      {children}
    </OutcomeContext.Provider>
  );
};
