import axios from 'axios';
import { baseUrl } from '../../infrastructure/config';

export const patch = (id, activities) => {
    axios.patch(`${baseUrl}/api/v1/pleasant_activities/${id}`, { pleasant_activity: activities })
    .then((response) => {
        //console.log(response.data);
    });
};

export const post = (activities, setFavoriteActivities) => {
    axios.post(`${baseUrl}/api/v1/pleasant_activities`, { pleasant_activity: activities })
    .then((response) => {
        const favoriteActivities = response.data.data;
        console.log(favoriteActivities);
    });
};