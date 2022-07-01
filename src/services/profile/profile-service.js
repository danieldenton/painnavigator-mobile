import axios from 'axios';
import { API_URL } from "@env";

export const patchUser = (uid, userUpdate, setUserInfo, setOnboardingComplete, setProfileComplete) => {
  axios.patch(`${API_URL}/api/v1/users/${uid}`, { user: userUpdate })
  .then((response) => {
    const userData = response.data.data;
    setUserInfo(userData.attributes.profile);
    setOnboardingComplete(userData.attributes.onboard_status === 1);
    setProfileComplete(userData.attributes.profile_status === 1);
  });
};