import axios from 'axios';
import { API_URL } from "@env"

export async function postDailyPainScore(uid, dailyPainScore, setDailyPainScore, setDailyPainScores) {
    try {
        const response = await axios.post(`${API_URL}/api/v2/daily_pain_scores`, 
        { 
            uid: uid, 
            score: dailyPainScore.score, 
            created_at: Date.now()
        })
        const data = response.data
        setDailyPainScore(data)
        setDailyPainScores(prevPainScores => [...prevPainScores, data])
    } catch (error) {
        console.error(error);
    }
};

export async function getDialyPainScores(uid, setDailyPainScores) {
    try {
        const response = await axios.get(`${API_URL}/api/v2/daily_pain_scores`, { uid: uid })
        setDailyPainScores(response.data)
    } catch (error) {
        console.error(error)
    }
}