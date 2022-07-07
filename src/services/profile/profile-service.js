import axios from 'axios';
import { API_URL } from "@env";

export const patchUser = (uid, userUpdate, setUserInfo, setProfileComplete) => {
  axios.patch(`${API_URL}/api/v1/users/${uid}`, { user: userUpdate })
  .then((response) => {
    const userData = response.data.data;
    setUserInfo(userData.attributes.profile);
    setProfileComplete(userData.attributes.profile_status === 1);
  });
};