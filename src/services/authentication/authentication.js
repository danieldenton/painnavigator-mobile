import axios from "axios";
import { API_URL } from "@env";

export async function postUser(uid, onboardingData) {
  const userData = {
    uid: uid,
    ...onboardingData,
  };
  await axios.post(`${API_URL}/api/v2/users`, { user: userData });
}

export const patchExpoPushToken = async (uid, expoPushToken) => {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      expo_push_token: expoPushToken,
    });
  } catch (error) {
    console.error(error);
  }
};

export async function getUser(uid) {
  try {
    const response = await axios.get(`${API_URL}/api/v2/users/${uid}`);
    const data = response.data.data.attributes;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const patchLastDateOnAppAndAppVersion = async (uid, timeZonedTodaysDate) => {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      last_date_on_app: timeZonedTodaysDate,
      app_version: "2.0.7",
    });
  } catch (error) {
    console.error(error);
  }
};

export const patchAppUpdateRequired = async (uid) => {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      app_update_required: false,
    });
  } catch (error) {
    console.error(error);
  }
};
