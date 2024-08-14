import axios from 'axios';
import { API_URL } from "@env";

export async function patchUser(uid, userUpdate, setUserInfo, setProfileComplete) {
  try {
    const response = await axios.patch(`${API_URL}/api/v2/users/${uid}`, { user: userUpdate });
    const data = response.data.data.attributes;
    setUserInfo(data.profile);
  } catch (error) {
    console.error(error);
  }
};