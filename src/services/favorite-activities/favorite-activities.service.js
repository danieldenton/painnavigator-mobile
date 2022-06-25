import axios from 'axios';
import { API_URL } from "@env"

export const patch = (id, activities) => {
    axios.patch(`${API_URL}/api/v1/pleasant_activities/${id}`, { pleasant_activity: activities })
    .then((response) => {
    });
};

export const post = (uid, activities, setFavoriteActivities) => {
    axios.post(`${API_URL}/api/v1/pleasant_activities`, { pleasant_activity: activities, uid: uid })
    .then((response) => {
        const favoriteActivities = response.data.data;
    });
};