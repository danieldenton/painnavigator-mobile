import React, { useState, createContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  loginRequest,
  patchExpoPushToken,
  postUser,
  patchCompletedProgram,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, expoPushToken }) => {
  const [userLoading, setUserLoading] = useState(null);
  const [user, setUser] = useState(null);
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
  const [completedProgram, setCompletedProgram] = useState(false);
  const [outcomeData, setOutcomeData] = useState({
    recommendation: 5,
    enjoymentOfLife: 5,
    activityInterference: 5,
    anxious: "",
    unableToStopWorrying: "",
    littleInterestOrPleasure: "",
    depressed: "",
  });
  const [educationProgram, setEducationProgram] = useState(1);
  const [lastDateOnApp, setLastDateOnApp] = useState("");
  const [tour, setTour] = useState(null);
  const uid = user?.user.uid;

  

  const handleEducationProgram = () => {
    if (providerId === 8) {
      setEducationProgram(2)
    }
    if (onboardingData.typeOfPain === "Low Back Pain") {
      if (
        onboardingData.hopesToAchieve.length === 1 &&
        onboardingData.hopesToAchieve[0] === "Strength & Prevention"
      ) {
        if (
          onboardingData.spineSurgery !== "No" &&
          onboardingData.painInjections !== "No"
        ) {
          setEducationProgram(5);
        } else if (
          onboardingData.spineSurgery !== "No" &&
          onboardingData.painInjections === "No"
        ) {
          setEducationProgram(6);
        } else if (
          onboardingData.spineSurgery === "No" &&
          onboardingData.painInjections !== "No"
        ) {
          setEducationProgram(4);
        } else if (
          onboardingData.spineSurgery === "No" &&
          onboardingData.painInjections === "No"
        ) {
          setEducationProgram(3);
        }
      } else {
        if (
          onboardingData.spineSurgery !== "No" &&
          onboardingData.painInjections !== "No"
        ) {
          setEducationProgram(8);
        } else if (
          onboardingData.spineSurgery !== "No" &&
          onboardingData.painInjections === "No"
        ) {
          setEducationProgram(9);
        } else if (
          onboardingData.spineSurgery === "No" &&
          onboardingData.painInjections !== "No"
        ) {
          setEducationProgram(7);
        } else {
          setEducationProgram(1)
        }
      }
    } else {
      return;
    }
  };

  const onLogin = (email, password) => {
    setUserLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        setError(e.toString());
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  function resetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  const onRegister = (password, repeatedPassword) => {
    const { firstName, lastName, email } = onboardingData;
    if (!firstName || !lastName) {
      setError("Error: Please provide your name");
      return;
    }
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    setUserLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        const strippedOnboardingData = {
          provider_id: providerId,
          first_name: onboardingData.firstName.trim(),
          last_name: onboardingData.lastName.trim(),
          email: onboardingData.email.trim(),
          starting_pain_score: onboardingData.startingPainScore,
          enjoyment_of_life: onboardingData.enjoymentOfLife,
          activity_interference: onboardingData.activityInterference,
          hopes_to_achieve: onboardingData.hopesToAchieve,
          anxious: onboardingData.anxious,
          unable_to_stop_worrying: onboardingData.unableToStopWorrying,
          little_interest_or_pleasure: onboardingData.littleInterestOrPleasure,
          depressed: onboardingData.depressed,
          type_of_pain: onboardingData.typeOfPain,
          pain_injections: onboardingData.painInjections,
          spine_surgery: onboardingData.spineSurgery,
          education_program: educationProgram,
        };
        postUser(u.user.uid, strippedOnboardingData);
        setUser(u);
        setTour(0);
        setStep(0);
      })
      .catch((e) => {
        setError(e.toString());
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  const signOut = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem("@user");
    } catch (e) {
      console.log("error clearing user", e);
    }
  };

  const saveUser = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (e) {
      console.log("error storing user", e);
    }
  };

  const loadUser = async () => {
    try {
      const value = await AsyncStorage.getItem("@user");
      if (value !== null) {
        setUser(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading user", e);
    }
  };

  const completeProgram = () => {
    patchCompletedProgram(uid, outcomeData);
    setCompletedProgram(true);
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

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    saveUser(user);
  }, [user]);

  // TODO fix this so it doesnt patch everytime.
  useEffect(() => {
    if (user && expoPushToken) {
      patchExpoPushToken(uid, expoPushToken);
    }
  }, [user, expoPushToken]);

  return (
    <AuthenticationContext.Provider
      value={{
        handleEducationProgram,
        error,
        tour,
        setTour,
        uid,
        isAuthenticated: !!user,
        step,
        setStep,
        nextStep,
        previousStep,
        onLogin,
        onRegister,
        setOnboardingData,
        onboardingData,
        user,
        userLoading,
        signOut,
        setProviderId,
        expoPushToken,
        setError,
        setCompletedProgram,
        outcomeData,
        setOutcomeData,
        completedProgram,
        completeProgram,
        educationProgram,
        setEducationProgram,
        lastDateOnApp,
        setLastDateOnApp,
        resetPassword,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
