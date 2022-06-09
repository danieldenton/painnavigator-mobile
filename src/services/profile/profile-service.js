import axios from 'axios';
import camelize from "camelize";
import { baseUrl } from '../../infrastructure/config';

export const patchUser = (id, userUpdate, setUserInfo) => {
  axios.patch(`${baseUrl}/api/v1/users/${id}`, { user: userUpdate })
  .then((response) => {
    setUserInfo(response.data.data.attributes);
    console.log(response.data.data.attributes);
  });
};