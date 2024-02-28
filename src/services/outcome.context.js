import React, { useState, createContext } from "react";

export const outcomeDataContext = createContext();

export const outcomeDataContextProvider = ({ children }) => {
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


  return (
    <outcomeDataContext.Provider
      value={{
        outcomeStep,
        setOutcomeStep,
        setOutcomeData,
        outcomeData,
      }}
    >
      {children}
    </outcomeDataContext.Provider>
  );
};
