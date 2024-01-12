import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { API_URL } from "@env";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export async function checkReferralCode(referralCode) {
  try {
    const response = await axios.get(
      `${API_URL}/api/v1/providers/${referralCode}`
    );
    const provider_id = response.data.data.attributes.id;
    return provider_id;
  } catch (err) {
    console.log(err);
  }
}

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
  setAccessToWellnessCoach
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
    setCompletedProgram(data.outcome.completed_program === true);
    setLastDateOnApp(data.last_date_on_app);
    setAccessToWellnessCoach(data.access_to_wellness_coach);
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

export const patchCompletedProgram = async (uid, outcomeData) => {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      completed_program: true,
      recommendation: outcomeData.recommendation,
      outcome_enjoyment_of_life: outcomeData.enjoymentOfLife,
      outcome_activity_interference: outcomeData.activityInterference,
      outcome_anxious: outcomeData.anxious,
      outcome_unable_to_stop_worrying: outcomeData.unableToStopWorrying,
      outcome_little_interest_or_pleasure: outcomeData.littleInterestOrPleasure,
      outcome_depressed: outcomeData.depressed,
    });
  } catch (error) {
    console.error(error);
  }
};