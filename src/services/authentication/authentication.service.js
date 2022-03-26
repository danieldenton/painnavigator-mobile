import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const baseUrl = 'https://3000-silver-slug-ggyxd3yy.ws-us38.gitpod.io';

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const postUser = (uid, name) => {
  axios.post(`${baseUrl}/api/v1/users`, { user: {uid: uid, name: name} })
  .then((response) => {
      console.log(response.data);
  });
}