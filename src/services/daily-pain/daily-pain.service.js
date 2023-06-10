import axios from 'axios';
import { API_URL } from "@env"

export async function postDailyPainScore(uid, dailyPainScore, setDailyPainScore, setDailyPainScores) {
    try {
        const response = await axios.post(`${API_URL}/api/v2/daily_pain_scores`, 
        { 
            uid: uid, 
            score: dailyPainScore.score, 
            date_time_value: Date.now()
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

export async function  pastDailyPainScore(dailyPainScore, setDailyPainScore, setDailyPainScores) {
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