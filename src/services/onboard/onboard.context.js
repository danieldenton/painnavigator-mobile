import React, { useState, createContext, useContext } from "react";
import { EducationContext } from "../education/education.context";

export const OnboardContext = createContext();

export const OnboardContextProvider = ({ children }) => {
  const [providerCode, setProviderCode] = useState("");
  const [error, setError] = useState(null);
  const [step, setStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    startingPainScore: 5,
    enjoymentOfLife: 5,
    activityInterference: 5,
    typeOfPain: "",
    painInjections: "",
    spineSurgery: "",
  });
  const [providerId, setProviderId] = useState(null);
  const [tour, setTour] = useState(null);
  const { educationProgram, setEducationProgram, setInjectionModuleType } =
    useContext(EducationContext);

  const handleInjectionContent = () => {
    const providerPrefixes = "ASC" || "RSP" || "CPW" || "PPS";
    if (providerCode.startsWith(providerPrefixes)) {
      if (providerCode.endsWith("TPI")) {
        setInjectionModuleType(1);
      } else if (providerCode.endsWith("LES")) {
        setInjectionModuleType(2);
      } else if (providerCode.endsWith("LTE")) {
        setInjectionModuleType(3);
      } else if (providerCode.endsWith("LFI")) {
        setInjectionModuleType(4);
      } else if (providerCode.endsWith("SJI")) {
        setInjectionModuleType(5);
      } else if (providerCode.endsWith("LSC")) {
        setInjectionModuleType(6);
      }
    }
  };

  const handlePossibleEducationPrograms = () => {
    const painInjectionsAndSpineSurgery =
      onboardingData.painInjections !== "No" &&
      onboardingData.spineSurgery !== "No";
    const painInjectionsButNoSpineSurgery =
      onboardingData.painInjections !== "No" &&
      onboardingData.spineSurgery === "No";
    const neitherPainInjectionsNorSpineSurgery =
      onboardingData.painInjections === "No" &&
      onboardingData.spineSurgery === "No";
    // the "else" condition covers noPainInjectionsButSpineSurgery
    if (painInjectionsAndSpineSurgery) {
      setEducationProgram(1);
    } else if (painInjectionsButNoSpineSurgery) {
      setEducationProgram(7);
    } else if (neitherPainInjectionsNorSpineSurgery) {
      setEducationProgram(8);
    } else {
      setEducationProgram(9);
    }
  };

  const handleEducationProgram = () => {
    if (providerId === 8) {
      setEducationProgram(2);
    } else {
      if (onboardingData.typeOfPain === "Low Back Pain") {
        handlePossibleEducationPrograms();
      } else {
        setEducationProgram(10);
      }
    }
  };

  const nextStep = () => {
    setStep((prevPage) => {
      return prevPage + 1;
    });
  };

  const previousStep = () => {
    setStep((prevPage) => {
      return prevPage - 1;
    });
  };

  return (
    <OnboardContext.Provider
      value={{
        providerCode,
        setProviderCode,
        handleEducationProgram,
        educationProgram,
        setError,
        error,
        step,
        setStep,
        nextStep,
        previousStep,
        setOnboardingData,
        onboardingData,
        setProviderId,
        providerId,
        tour,
        setTour,
        handleInjectionContent
      }}
    >
      {children}
    </OnboardContext.Provider>
  );
};
