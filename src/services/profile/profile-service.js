import axios from 'axios';
// for getUser
import camelize from "camelize";

const baseUrl = 'https://3000-silver-slug-ggyxd3yy.ws-us38.gitpod.io';

//TODO: getUser

export const patchUser = (uid, userUpdate) => {
  axios.patch(`${baseUrl}/api/v1/users/${uid}`, { user: userUpdate })
  .then((response) => {
      console.log(response.data);
  });
};