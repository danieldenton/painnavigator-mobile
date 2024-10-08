import axios from "axios";
import { API_URL } from "@env";

export async function postUser(uid, onboardingData) {
  try {
    const userData = {
      uid: uid,
      ...onboardingData,
    };
    await axios.post(`${API_URL}/api/v2/users`, { user: userData });
  } catch (error) {
    console.error(error);
  }
}

export async function getUser(uid) {
  try {
    const response = await axios.get(`${API_URL}/api/v2/users/${uid}`);
    const data = response.data.data.attributes;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const patchUser = async (uid, userUpdatesObject) => {
  try {
    const response = await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      user: userUpdatesObject,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
