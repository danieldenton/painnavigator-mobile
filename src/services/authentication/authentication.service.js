import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { baseUrl } from '../../infrastructure/config';

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const postUser = async (uid, first_name, last_name, email) => {
  const response = await axios.post(`${baseUrl}/api/v1/users`, { 
    user: {
      uid: uid, 
      first_name: first_name,
      last_name: last_name,
      email: email
    } 
});
  console.log(response.data);
  return response;
};