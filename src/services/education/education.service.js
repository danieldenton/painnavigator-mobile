import axios from 'axios';
import { API_URL } from "@env"

console.log(API_URL)

export async function postEducationModule(module, setEducationProgress, uid) {
    try {
        const response = await axios.post(`${API_URL}/api/v2/education_module_completions`, { education_module_completion: module, uid: uid })
        const data = response.data.data.attributes;
        setEducationProgress(data.module_id);
    } catch (error) {
        console.error(error);
    }
};