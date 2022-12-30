import axios from 'axios';
import { API_URL } from "@env"

export async function postEducationModule(module, setLastCompletedModule, uid) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/education_module_completions`, { education_module_completion: module, uid: uid })
        //console.log(response.data.data);
    } catch (error) {
        console.error(error);
    }
};