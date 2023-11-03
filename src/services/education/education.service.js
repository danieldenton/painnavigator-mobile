import axios from 'axios';
import { API_URL } from "@env"

export async function postEducationModule(module, uid) {
    try {
        const response = await axios.post(`${API_URL}/api/v2/education_module_completions`, { education_module_completion: module, uid: uid })
        const data = response.data.data.attributes;
        // TODO get this from the back end
        // setEducationProgress(data.education_progress);
    } catch (error) {
        console.error(error);
    }
};