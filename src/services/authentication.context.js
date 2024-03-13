import React, { useState, createContext, useContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@env";
import { OnboardContext } from "./onboard.context";
import {
  patchSkippedMovementUnits,
  patchCompletedMovementUnits,
} from "./movement/movement.service";
import { EducationContext } from "./education/education.context";
import { ProfileContext } from "./profile/profile-context";
import { OutcomeContext } from "./outcome.context";
import { MovementContext } from "./movement/movement.context";
import { WellnessCoachContext } from "./wellness-coach.context";
import { timeZonedTodaysDate } from "../utils";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, expoPushToken }) => {
  const [userLoading, setUserLoading] = useState(null);
  const [user, setUser] = useState(null);
  const [lastDateOnApp, setLastDateOnApp] = useState("");
  const uid = user?.user.uid;

  const { setUserInfo, setProfileComplete } = useContext(ProfileContext);
  const { setEducationProgram, educationProgram, setEducationProgress } =
    useContext(EducationContext);
  const { onboardingData, setError, providerId } = useContext(OnboardContext);
  const { setCompletedProgram } = useContext(OutcomeContext);
  const {
    setMovementProgress,
    completedMovementModules,
    skippedMovementModules,
  } = useContext(MovementContext);
  const { setWellnessCoachReminded } = useContext(WellnessCoachContext);

  const loginRequest = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  async function postUser(strippedOnboardingData) {
    const userData = {
      uid: uid,
      ...strippedOnboardingData,
    };
    await axios.post(`${API_URL}/api/v2/users`, { user: userData });
  }

  const patchExpoPushToken = async () => {
    try {
      await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
        expo_push_token: expoPushToken,
      });
    } catch (error) {
      console.error(error);
    }
  };

  async function getUser() {
    try {
      const response = await axios.get(`${API_URL}/api/v2/users/${uid}`);
      const data = response.data.data.attributes;
      const eProgress = data.education_progress.education_progress
        ? data.education_progress.education_progress
        : data.education_progress.progress;
      setUserInfo(data.profile);
      setEducationProgram(data.education_program);
      setEducationProgress(eProgress);
      setMovementProgress(data.movement_progress.progress);
      setProfileComplete(data.profile.profile_status === 1);
      setCompletedProgram(data.completed_program === true);
      setLastDateOnApp(data.last_date_on_app);
      setWellnessCoachReminded(data.wellness_coach_reminded);
    } catch (error) {
      console.error(error);
    }
  }

  const patchLastDateOnApp = async () => {
    try {
      await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
        last_date_on_app: timeZonedTodaysDate,
      });
    } catch (error) {
      console.error(error);
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
          little_interest_or_pleasure: onboardingData.ittleInterestOrPleasure,
          depressed: onboardingData.depressed,
          type_of_pain: onboardingData.typeOfPain,
          pain_injections: onboardingData.painInjections,
          spine_surgery: onboardingData.spineSurgery,
          education_program: educationProgram,
        };
        postUser(strippedOnboardingData);
        setUser(u);
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

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    saveUser(user);
  }, [user]);

  // TODO fix this so it doesnt patch everytime.
  useEffect(() => {
    if (user && expoPushToken) {
      patchExpoPushToken();
    }
  }, [user, expoPushToken]);

  // TODO get these out of here
  useEffect(() => {
    if (skippedMovementModules) {
      patchSkippedMovementUnits(uid, skippedMovementModules);
    }
  }, [skippedMovementModules]);

  useEffect(() => {
    if (completedMovementModules) {
      patchCompletedMovementUnits(uid, completedMovementModules);
    }
  }, [completedMovementModules]);

  return (
    <AuthenticationContext.Provider
      value={{
        uid,
        getUser,
        isAuthenticated: !!user,
        onLogin,
        onRegister,
        user,
        userLoading,
        signOut,
        expoPushToken,
        lastDateOnApp,
        patchLastDateOnApp,
        resetPassword,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
