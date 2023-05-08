import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { API_URL, SERVER_API_URL } from "@env";
// import { months } from "../../features/pain-journal/data/months";
import { track } from "@amplitude/analytics-react-native";
import { ONBOARD_EVENTS } from '../../amplitude-events';

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
  console.log(API_URL)

  console.log(SERVER_API_URL)

export async function checkReferralCode(
  referralCode,
  setProviderId,
  setError,
  navigation
) {
  try {
    const response = await axios.get(
      `${SERVER_API_URL}/api/v1/providers/${referralCode}`
    );
    const data = response.data.data.attributes;
    const provider_id = data.id;
    setProviderId(provider_id);
    setError(null);
    navigation.navigate("ProfileSetup");
    track(ONBOARD_EVENTS.ENTER_REFERRAL_CODE);
  } catch (err) {
    setError("Please enter a valid code");
  }
};

export async function postUser(uid, onboardingData) {
  const userData = {
    uid: uid,
    ...onboardingData
  };
  // console.log(userData)
  const response = await axios.post(`${SERVER_API_URL}/api/v1/users`, { user: userData });
};

export const patchExpoPushToken = async (uid, token) => {
  try {
    await axios.patch(`${SERVER_API_URL}/api/v1/users/${uid}`, { expo_push_token: token });
  } catch (error) {
    console.error(error);
  }
}

export async function getUser(
  uid, 
  setUserInfo,  
  setEducationProgress, 
  setProfileComplete, 
  setMovementProgress,
  setPainJournals,
  setMoodJournals,
  setFoodJournals,
  setCompletedProgram
) {
  try {
    const response = await axios.get(`${SERVER_API_URL}/api/v1/users/${uid}`);
    const data = response.data.data.attributes;
    setUserInfo(data.profile)
    setEducationProgress(data.education_progress.progress)
    setMovementProgress(data.movement_progress.progress)
    setProfileComplete(data.profile_status === 1)
    setPainJournals(data.pain_journals.reverse())
    setMoodJournals(data.mood_journals.reverse())
    setFoodJournals(data.food_journals.reverse())
    setCompletedProgram(data.completed_program)
  } catch (error) {
    console.error(error);
  }
}

export const patchCompletedProgram = async (uid) => {
  try {
    await axios.patch(`${API_URL}/api/v1/users/${uid}`, { completed_program: true});
  } catch (error) {
    console.error(error);
  }
}

// function painGraphDataTransform(data) {
//   const painDataArray = [];
//   const lineDataArray = [];
//   Object.entries(data).forEach(([key, value]) => {
//       painDataArray.push({ x: key, y: value === null ? value : Number(value) });
//       lineDataArray.push({ x: key, y: value === null ? value : Number(value) });
//   });
//   const currentMonthArray = new Array(painDataArray.pop());
//   return { line: lineDataArray, graph: painDataArray, current: currentMonthArray, xAxis: fillMonths(lineDataArray) }
// };

// const fillMonths = (data) => {
//   const monthCount = Object.entries(data).length;
//   if(monthCount === 3) {
//       const firstMonth = data[0].x;
//       const secondMonth = data[1].x;
//       const thirdMonth = data[2].x; 
//       const xData = [`${firstMonth}`, `${secondMonth}`, `${thirdMonth}`];
//       return xData;
//   } else if (monthCount === 2) {
//       const firstMonth = data[0].x;
//       const secondMonth = data[1].x;
//       const secondMonthData = months.find(month => month.month === secondMonth);
//       const thirdMonthData = months.find(month => month.id === secondMonthData.id + 1);
//       const xData = new Array(firstMonth, secondMonth, thirdMonthData.month);
//       return xData;
//   } else if (monthCount === 1) {
//       const firstMonth = data[0].x;
//       const firstMonthData = months.find(month => month.month === firstMonth);
//       const secondMonthData = months.find(month => month.id === firstMonthData.id + 1);
//       const thirdMonthData = months.find(month => month.id === firstMonthData.id + 2);
//       const xData = new Array(firstMonth, secondMonthData.month, thirdMonthData.month);
//       return xData;
//   } else {
//     return data.map(month => month.x);
//   }
// };
