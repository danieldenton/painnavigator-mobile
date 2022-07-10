import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { API_URL } from "@env"
import { months } from "../../features/pain-journal/data/months";

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
  setLastMovement,
  setPainGraphData
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
      setPainGraphData(painGraphDataTransform(profile.attributes.pain_graph_data));
  })
  .catch(resp => console.log(resp))
}; 

function painGraphDataTransform(data) {
  const painDataArray = [];
  const lineDataArray = [];
  Object.entries(data).forEach(([key, value]) => {
      painDataArray.push({ x: key, y: value === null ? value : Number(value) });
      lineDataArray.push({ x: key, y: value === null ? value : Number(value) });
  });
  const currentMonthArray = new Array(painDataArray.pop());
  return { line: lineDataArray, graph: painDataArray, current: currentMonthArray, xAxis: fillMonths(lineDataArray) }
};

const fillMonths = (data) => {
  const monthCount = Object.entries(data).length;
  if(monthCount === 3) {
      const firstMonth = data[0].x;
      const secondMonth = data[1].x;
      const thirdMonth = data[2].x; 
      const xData = [`${firstMonth}`, `${secondMonth}`, `${thirdMonth}`];
      return xData;
  } else if (monthCount === 2) {
      const firstMonth = data[0].x;
      const secondMonth = data[1].x;
      const secondMonthData = months.find(month => month.month === secondMonth);
      const thirdMonthData = months.find(month => month.id === secondMonthData.id + 1);
      const xData = new Array(firstMonth, secondMonth, thirdMonthData.month);
      return xData;
  } else if (monthCount === 1) {
      const firstMonth = data[0].x;
      const firstMonthData = months.find(month => month.month === firstMonth);
      const secondMonthData = months.find(month => month.id === firstMonthData.id + 1);
      const thirdMonthData = months.find(month => month.id === firstMonthData.id + 2);
      const xData = new Array(firstMonth, secondMonthData.month, thirdMonthData.month);
      return xData;
  }
};
