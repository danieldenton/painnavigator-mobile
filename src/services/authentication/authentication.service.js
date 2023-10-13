import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { API_URL } from "@env";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export async function checkReferralCode(referralCode) {
  try {
    const response = await axios.get(
      `${API_URL}/api/v1/providers/${referralCode}`
    );
    const provider_id = response.data.data.attributes.id;
    return provider_id;
  } catch (err) {
    console.log(err);
  }
}

export async function postUser(uid, onboardingData) {
  const userData = {
    uid: uid,
    ...onboardingData,
  };
  await axios.post(`${API_URL}/api/v2/users`, { user: userData });
}

export const patchExpoPushToken = async (uid, token) => {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      expo_push_token: token,
    });
  } catch (error) {
    console.error(error);
  }
};

export async function getUser(
  uid,
  setUserInfo,
  setEducationProgram,
  setEducationProgress,
  setMovementProgress,
  setProfileComplete,
  setCompletedProgram,
  setLastDateOnApp,
  setCompletedMovementModules,
  setSkippedMovementModules,
  setSavedMovementUnits
) {
  try {
    const response = await axios.get(`${API_URL}/api/v2/users/${uid}`);
    const data = response.data.data.attributes;
    const eProgress = data.education_progress.education_progress
      ? data.education_progress.education_progress
      : data.education_progress.progress;
    setUserInfo(data.profile);
    setEducationProgram(data.education_program);
    setEducationProgress(eProgress);
    setMovementProgress(data.movement_progress.progress);
    setProfileComplete(data.profile.profile_status === 1);
    setCompletedProgram(data.outcome.completed_program === true);
    setLastDateOnApp(data.last_date_on_app);
    setCompletedMovementModules(data.movement_units.completed_movement_units)
    setSkippedMovementModules(data.movement_units.skipped_movement_units)
    setSavedMovementUnits(data.movement_units.saved_movement_units)
    console.log(data.movement_units.saved_movement_units, data.movement_units.skipped_movement_units, data.movement_units.completed_movement_units)
  } catch (error) {
    console.error(error);
  }
}

export const patchLastDateOnApp = async (uid, date) => {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      last_date_on_app: date,
    });
  } catch (error) {
    console.error(error);
  }
};

export const patchCompletedProgram = async (uid, outcomeData) => {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      completed_program: true,
      recommendation: outcomeData.recommendation,
      outcome_enjoyment_of_life: outcomeData.enjoymentOfLife,
      outcome_activity_interference: outcomeData.activityInterference,
      outcome_anxious: outcomeData.anxious,
      outcome_unable_to_stop_worrying: outcomeData.unableToStopWorrying,
      outcome_little_interest_or_pleasure: outcomeData.littleInterestOrPleasure,
      outcome_depressed: outcomeData.depressed,
    });
  } catch (error) {
    console.error(error);
  }
};

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
