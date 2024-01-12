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
import { hopesOptions } from "../../features/account/data/onboard-data.json";
import { checkproviderCode } from "./authentication.service";
import { track } from "@amplitude/analytics-react-native";
import { ONBOARD_EVENTS } from "../../amplitude-events";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, expoPushToken }) => {
  const [userLoading, setUserLoading] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(0);
  const [accessToWellnessCoach, setAccessToWellnessCoach] = useState(true);
  const [onboardingData, setOnboardingData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    startingPainScore: 5,
    enjoymentOfLife: 5,
    activityInterference: 5,
    hopesToAchieve: new Array(),
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
  const [programSafety, setProgramSafety] = useState(false);
  const [lastDateOnApp, setLastDateOnApp] = useState("");
  const [tour, setTour] = useState(null);
  const uid = user?.user.uid;

  async function checkProviderCode(providerCode) {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/providers/${providerCode}`
      );
      const provider_id = response.data.data.attributes.id;
      provider_id
        ? (setProviderId(provider_id),
          providerCode.endsWith("N")
            ? setAccessToWellnessCoach(false)
            : setAccessToWellnessCoach(true),
          setError(null))
        : setError("Please enter a valid code");
    } catch (err) {
      setError("Please enter a valid code");
      console.error(err);
    }
  }

  const handleProgram = (providerCode) => {
    providerCode === "ASC112" ||
    providerCode === "EXPL22" ||
    providerCode === "CORE55"
      ? setProgramSafety(true)
      : null;
    providerCode === "ISCS23"
      ? (setProgramSafety(true), setEducationProgram(2))
      : null;
  };

  const handleEducationProgram = () => {
    if (programSafety || onboardingData.typeOfPain === "Low Back Pain") {
      if (
        onboardingData.hopesToAchieve.length === 1 &&
        onboardingData.hopesToAchieve[0] === 4
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
          return;
        }
      }
    } else {
      return;
    }
  };

  const handleOtherPainTypeProgram = () => {
    if (
      onboardingData.hopesToAchieve.length === 1 &&
      onboardingData.hopesToAchieve[0] === 4
    ) {
      setEducationProgram(11);
    } else {
      setEducationProgram(10);
    }
    if (onboardingData.typeOfPain === "Other") {
      setStep(12);
      onboardingData.typeOfPain = "";
    } else {
      navigation.navigate("Register");
    }
  };

  const changeOnboardEntry = (change, state) => {
    setOnboardingData((entry) => ({
      ...entry,
      [state]: change,
    }));
  };

  const changeOutcomeEntry = (change, state) => {
    setOutcomeData((entry) => ({
      ...entry,
      [state]: change,
    }));
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

  const findHopesToAchieve = () => {
    const selectedHopes = onboardingData.hopesToAchieve;
    const text = hopesOptions.filter((option) =>
      selectedHopes.includes(option.id)
    );
    const hopes = text.map((option) => option.option);
    return String(hopes).replace(/,/g, ", ");
  };

  const onRegister = (password, repeatedPassword) => {
    const { first_name, last_name, email } = onboardingData;
    if (!first_name || !last_name) {
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
        const hopes_to_achieve = findHopesToAchieve();
        const strippedOnboardingData = {
          provider_id: providerId,
          access_to_wellness_coach: accessToWellnessCoach,
          first_name: onboardingData.first_name.trim(),
          last_name: onboardingData.last_name.trim(),
          email: onboardingData.email.trim(),
          starting_pain_score: onboardingData.startingPainScore,
          enjoyment_of_life: onboardingData.enjoymentOfLife,
          activity_interference: onboardingData.activityInterference,
          hopes_to_achieve: hopes_to_achieve,
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
    setStep(0);
  };

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    saveUser(user);
  }, [user]);

  useEffect(() => {
    if (user && expoPushToken) {
      patchExpoPushToken(uid, expoPushToken);
    }
  }, [user, expoPushToken]);

  return (
    <AuthenticationContext.Provider
      value={{
        changeOnboardEntry,
        checkProviderCode,
        handleOtherPainTypeProgram,
        accessToWellnessCoach,
        setAccessToWellnessCoach,
        checkProviderCode,
        handleProgram,
        error,
        tour,
        setTour,
        uid,
        isAuthenticated: !!user,
        nextStep,
        nextQuestion,
        step,
        setStep,
        onLogin,
        onRegister,
        setOnboardingData,
        onboardingData,
        previousStep,
        user,
        userLoading,
        signOut,
        setProviderId,
        expoPushToken,
        setError,
        setCompletedProgram,
        outcomeData,
        changeOutcomeEntry,
        completedProgram,
        completeProgram,
        educationProgram,
        setEducationProgram,
        programSafety,
        setProgramSafety,
        lastDateOnApp,
        setLastDateOnApp,
        resetPassword,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
