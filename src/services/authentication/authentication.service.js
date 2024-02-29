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



export const patchLastDateOnApp = async (uid, date) => {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      last_date_on_app: date,
    });
  } catch (error) {
    console.error(error);
  }
};


