import React, { useState, createContext, useContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { postUser, getUser, patchUser } from "./authentication";
import { OnboardContext } from "../onboard.context";
import { ProfileContext } from "../profile/profile-context";
import { MovementContext } from "../movement/movement.context";
import { EducationContext } from "../education/education.context";
import { OutcomeContext } from "../outcome.context";
import { WellnessCoachContext } from "../wellness-coach.context";
import { timeZonedTodaysDate } from "../../utils";


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, expoPushToken }) => {
  const [userLoading, setUserLoading] = useState(null);
  const [user, setUser] = useState(null);
  const [appUpdateRequired, setAppUpdateRequired] = useState(false);
  const uid = user?.user.uid;
  const { onboardingData, setError, providerId } = useContext(OnboardContext);
  const { setUserInfo, setProfileComplete } = useContext(ProfileContext);
  const { setMovementProgram } = useContext(MovementContext);
  const { educationProgram, setEducationProgram, setEducationProgress } =
    useContext(EducationContext);
  const { setCompletedProgram } = useContext(OutcomeContext);
  const {  setWellnessCoachReminded} = useContext(WellnessCoachContext)

  const loginRequest = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

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
          type_of_pain: onboardingData.typeOfPain,
          pain_injections: onboardingData.painInjections,
          spine_surgery: onboardingData.spineSurgery,
          education_program: educationProgram,
          expo_push_token: expoPushToken,
        };
        postUser(u.user.uid, strippedOnboardingData);
        setUser(u);
      })
      .catch((e) => {
        setError(e.toString());
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  const updateUser = (userData) => {
    let userUpdatesObject = {};
    if (userData.expo_push_token !== expoPushToken) {
      userUpdatesObject = {
        ...userUpdatesObject,
        expo_push_token: expoPushToken,
      };
    }
    if (userData.last_date_on_app !== timeZonedTodaysDate) {
      userUpdatesObject = {
        ...userUpdatesObject,
        last_date_on_app: timeZonedTodaysDate,
      };
    }
    if (userData.app_version !== "2.0.7") {
      userUpdatesObject = {
        ...userUpdatesObject,
        app_version: "2.0.7",
      };
    }
    if (Object.keys(userUpdatesObject).length > 0) {
      patchUser(uid, userUpdatesObject);
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem("@user");
    } catch (e) {
      console.log("error clearing user", e);
    }
  };

  const loadUserData = async () => {
    try {
      const userData = await getUser(uid);

      const eProgress = userData.education_progress.education_progress
        ? userData.education_progress.education_progress
        : userData.education_progress.progress;
      setUserInfo(userData.profile);
      setMovementProgram(userData.movement_program);
      setEducationProgram(userData.education_program);
      setEducationProgress(eProgress);
      setProfileComplete(userData.profile.profile_status === 1);
      setCompletedProgram(userData.completed_program === true);
      setWellnessCoachReminded(userData.wellness_coach_reminded);
      setAppUpdateRequired(userData.app_update_required);

      updateUser(userData);
    } catch (error) {
      console.error(error);
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

  return (
    <AuthenticationContext.Provider
      value={{
        uid,
        isAuthenticated: !!user,
        onLogin,
        onRegister,
        user,
        userLoading,
        loadUserData,
        updateUser,
        signOut,
        expoPushToken,
        resetPassword,
        appUpdateRequired,
        setAppUpdateRequired,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
