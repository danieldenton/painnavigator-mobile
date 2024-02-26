import axios from 'axios';
import { API_URL } from "@env"

export async function patch(id, activities, setFavoriteActivities) {
    try {
        const response = await axios.patch(`${API_URL}/api/v1/pleasant_activities/${id}`, { pleasant_activity: activities });
        const data = response.data.data.attributes;
        //console.log(data);
        //setFavoriteActivities(data);
    } catch (error) {
        console.error(error);
    }
};

export async function post(uid, activities, setFavoriteActivities) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/pleasant_activities`, { pleasant_activity: activities, uid: uid })
        const data = response.data.data.attributes;
        //console.log(data);
        //setFavoriteActivities(data);
    } catch (error) {
        console.error(error);
    }
}