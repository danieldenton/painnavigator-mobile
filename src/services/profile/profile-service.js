import axios from 'axios';
import { API_URL } from "@env";

export async function patchUser(uid, userUpdate, setUserInfo, setProfileComplete) {
  try {
    const response = await axios.patch(`${API_URL}/api/v1/users/${uid}`, { user: userUpdate });
    const data = response.data.data.attributes;
    console.log(data);
    setUserInfo(data.profile);
    setProfileComplete(true);
  } catch (error) {
    console.error(error);
  }
};