import axios from 'axios';
import { API_URL } from "@env"

export async function getDailyPainScores(userUid, setDailyPainScores) {
    try {
      const response = await axios.get(`${API_URL}/api/v2/daily_pain_scores`, {
        params: {
          uid: userUid,
        },
      });
      setDailyPainScores(response.data);
    } catch (error) {
      console.error(error);
    }
  }

export async function postDailyPainScore(userUid, dailyPainScore, setDailyPainScore) {
    try {
        const response = await axios.post(`${API_URL}/api/v2/daily_pain_scores`, 
        { 
            uid: userUid, 
            score: dailyPainScore.score, 
            date_time_value: Date.now()
        })
        const data = response.data
        setDailyPainScore(data)
    } catch (error) {
        console.error(error);
    }
};

export async function  patchDailyPainScore(dailyPainScore, setDailyPainScore) {
    try {
        const response = await axios.patch(`${API_URL}/api/v2/daily_pain_scores/${dailyPainScore.id}`, { 
            score: dailyPainScore.score,
            date_time_value: Date.now() 
        })
        setDailyPainScore(response.data)
    } catch (error) {
        console.error(error)
    }
}