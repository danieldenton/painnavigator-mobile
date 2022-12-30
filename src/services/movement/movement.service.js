import axios from 'axios';
import { API_URL } from "@env"

export async function post(module, uid) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/movement_module_completions`, { movement_module: module, uid: uid })
        //console.log(response.data.data);
    } catch (error) {
        console.error(error);
    }
};