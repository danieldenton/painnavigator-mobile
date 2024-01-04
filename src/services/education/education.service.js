import axios from 'axios';
import { API_URL } from "@env"

export async function postEducationModule(uid, module, status) {
    try {
        const response = await axios.post(`${API_URL}/api/v2/education_module_completions`, { 
            uid: uid, 
            education_module_completion: module, 
            status: status
        })
       return response
    } catch (error) {
        console.error(error);
    }
};