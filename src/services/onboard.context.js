import React, { useState, createContext } from "react";

export const OnboardContext = createContext();

export const OnboardContextProvider = ({ children, expoPushToken }) => {
  const [error, setError] = useState(null);
  const [step, setStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    startingPainScore: 5,
    enjoymentOfLife: 5,
    activityInterference: 5,
    hopesToAchieve: [],
    anxious: "",
    unableToStopWorrying: "",
    littleInterestOrPleasure: "",
    depressed: "",
    typeOfPain: "",
    painInjections: "",
    spineSurgery: "",
  });
  const [providerId, setProviderId] = useState(null);
  const [educationProgram, setEducationProgram] = useState(1);

  const handlePossibleEducationPrograms = (possiblePrograms) => {
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
      setEducationProgram(possiblePrograms[0]);
    } else if (painInjectionsButNoSpineSurgery) {
      setEducationProgram(possiblePrograms[1]);
    } else if (neitherPainInjectionsNorSpineSurgery) {
      setEducationProgram(possiblePrograms[2]);
    } else {
      setEducationProgram(possiblePrograms[3]);
    }
  };

  const handleEducationProgram = () => {
    const lowBackPainPossiblePrograms = [1, 7, 8, 9];
    const lowBackPainPossibleProgramsHopesToAchieveOnly = [3, 4, 5, 6];
    const hopesToAchieveStrengthAndPreventionOnly =
      onboardingData.hopesToAchieve.length === 1 &&
      onboardingData.hopesToAchieve[0] === "Strength & Prevention";
    if (providerId === 8) {
      setEducationProgram(2);
    } else {
      if (hopesToAchieveStrengthAndPreventionOnly) {
        if (onboardingData.typeOfPain === "Low Back Pain") {
          handlePossibleEducationPrograms(
            lowBackPainPossibleProgramsHopesToAchieveOnly
          );
        } else {
          setEducationProgram(11);
        }
      } else {
        if (onboardingData.typeOfPain === "Low Back Pain") {
          handlePossibleEducationPrograms(lowBackPainPossiblePrograms);
        } else {
          setEducationProgram(10);
        }
      }
    }
  };

  const nextStep = () => {
    setStep((prevPage) => {
      return prevPage + 1;
    });
  };

  const previousStep = () => {
    if (step === 12) {
      setStep(8);
    } else {
      setStep((prevPage) => {
        return prevPage - 1;
      });
    }
  };

  return (
    <OnboardContext.Provider
      value={{
        handleEducationProgram,
        educationProgram,
        error,
        step,
        setStep,
        nextStep,
        previousStep,
        setOnboardingData,
        onboardingData,
        setProviderId,
        expoPushToken,
        setError,
      }}
    >
      {children}
    </OnboardContext.Provider>
  );
};
