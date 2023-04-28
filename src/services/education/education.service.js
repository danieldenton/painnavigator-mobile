import axios from 'axios';
import { API_URL, SERVER_API_URL } from "@env"

export async function postEducationModule(module, setEducationProgress, uid) {
    // console.log(API_URL)
    // console.log(SERVER_API_URL)
    try {
        const response = await axios.post(`${API_URL}/api/v2/education_module_completions`, { education_module_completion: module, uid: uid })
        const data = response.data.data.attributes;
        setEducationProgress(data.module_id);
    } catch (error) {
        console.error(error);
    }
};