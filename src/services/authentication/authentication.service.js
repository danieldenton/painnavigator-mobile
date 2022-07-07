import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { API_URL } from "@env"

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const postUser = async (uid, onboardingData) => {
  const userData = {
    uid: uid,
    ...onboardingData
  };
  const response = await axios.post(`${API_URL}/api/v1/users`, { user: userData }
);
  return response;
};

export const get = (
  uid, 
  setUserInfo, 
  setMessages, 
  setEducationProgress, 
  setProfileComplete, 
  setLastCompletedModule,
  setMovementProgress,
  setLastMovement
) => {
  axios.get(`${API_URL}/api/v1/users/${uid}`)
  .then( resp => {
      const profile = resp.data.data;
      setUserInfo(profile.attributes.profile);
      setMessages(profile.attributes.conversation);
      setEducationProgress(profile.attributes.education_progress.progress);
      setProfileComplete(profile.attributes.profile_status === 1);
      setLastCompletedModule(profile.attributes.education_progress.last_completed_date);
      //setMovementProgress(profile.attributes.movement_progress.progress);
      setLastMovement(profile.attributes.movement_progress.last_completed_date);
  })
  .catch(resp => console.log(resp))
}; 