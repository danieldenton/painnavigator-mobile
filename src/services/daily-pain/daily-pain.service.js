import axios from "axios";
import { API_URL } from "@env";

export async function getDailyPainScores(uid) {
  try {
    const response = await axios.get(`${API_URL}/api/v2/daily_pain_scores`, {
      params: {
        uid: uid,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function postDailyPainScore(uid, dailyPainScore) {
  try {
    const response = await axios.post(`${API_URL}/api/v2/daily_pain_scores`, {
      uid: uid,
      score: dailyPainScore.score,
      date_time_value: Date.now(),
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function patchDailyPainScore(dailyPainScore) {
  try {
    const response = await axios.patch(
      `${API_URL}/api/v2/daily_pain_scores/${dailyPainScore.id}`,
      {
        score: dailyPainScore.score,
        date_time_value: Date.now(),
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
