import axios from 'axios';
import camelize from "camelize";
import { baseUrl } from '../../infrastructure/config';

export const patchUser = (uid, userUpdate, setUserInfo) => {
  axios.patch(`${baseUrl}/api/v1/users/${uid}`, { user: userUpdate })
  .then((response) => {
    const userData = response.data.data;
    setUserInfo(userData.attributes);
    console.log(userData);
  });
};