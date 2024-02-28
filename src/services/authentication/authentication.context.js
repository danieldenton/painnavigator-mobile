import React, { useState, createContext, useContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OnboardContext } from "../onboard.context";
import {
  loginRequest,
  patchExpoPushToken,
  postUser,
  patchCompletedProgram,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, expoPushToken }) => {
  const { onboardingData, setError, providerId, educationProgram } =
    useContext(OnboardContext);
  const {
    startingPainScore,
    enjoymentOfLife,
    activityInterference,
    hopesToAchieve,
    anxious,
    unableToStopWorrying,
    littleInterestOrPleasure,
    depressed,
    typeOfPain,
    painInjections,
    spineSurgery,
  } = onboardingData;
  const [userLoading, setUserLoading] = useState(null);
  const [user, setUser] = useState(null);
  const [lastDateOnApp, setLastDateOnApp] = useState("");
  const [tour, setTour] = useState(null);
  const [completedProgram, setCompletedProgram] = useState(false);
  const uid = user?.user.uid;

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
          starting_pain_score: startingPainScore,
          enjoyment_of_life: enjoymentOfLife,
          activity_interference: activityInterference,
          hopes_to_achieve: hopesToAchieve,
          anxious: anxious,
          unable_to_stop_worrying: unableToStopWorrying,
          little_interest_or_pleasure: littleInterestOrPleasure,
          depressed: depressed,
          type_of_pain: typeOfPain,
          pain_injections: painInjections,
          spine_surgery: spineSurgery,
          education_program: educationProgram,
        };
        postUser(u.user.uid, strippedOnboardingData);
        setUser(u);
        setTour(0);
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
        tour,
        setTour,
        uid,
        isAuthenticated: !!user,
        onLogin,
        onRegister,
        user,
        userLoading,
        signOut,
        expoPushToken,
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
