import axios from 'axios';
import { API_URL } from "@env"

export const post = (module, uid) => {
    axios.post(`${API_URL}/api/v1/movement_modules`, { movement_module: module, uid: uid })
    .then((response) => {
        const moduleData = response.data.data;
        console.log(moduleData);
    });
};