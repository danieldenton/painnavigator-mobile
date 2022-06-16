import axios from 'axios';
import { baseUrl } from "../../infrastructure/config";

export const post = (module, uid) => {
    axios.post(`${baseUrl}/api/v1/movement_modules`, { movement_module: module, uid: uid })
    .then((response) => {
        const moduleData = response.data.data;
        console.log(moduleData);
    });
};