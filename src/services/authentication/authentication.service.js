import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { API_URL } from "@env";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export async function postUser(uid, onboardingData) {
  const userData = {
    uid: uid,
    ...onboardingData,
  };
  await axios.post(`${API_URL}/api/v2/users`, { user: userData });
}

export const patchExpoPushToken = async (uid, token) => {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      expo_push_token: token,
    });
  } catch (error) {
    console.error(error);
  }
};

export async function getUser(
  uid,
  setUserInfo,
  setEducationProgram,
  setEducationProgress,
  setMovementProgress,
  setProfileComplete,
  setCompletedProgram,
  setLastDateOnApp,
  setWellnessCoachReminded
) {
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
    setWellnessCoachReminded(data.wellness_coach_reminded)
  } catch (error) {
    console.error(error);
  }
}

export const patchLastDateOnApp = async (uid, date) => {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      last_date_on_app: date,
    });
  } catch (error) {
    console.error(error);
  }
};


