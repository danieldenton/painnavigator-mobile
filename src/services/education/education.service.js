import axios from 'axios';
import { API_URL } from "@env"

export async function postEducationModule(module, setEducationProgress, uid) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/education_module_completions`, { education_module_completion: module, uid: uid })
        data = response.data.data.attributes;
        //console.log(data);
        setEducationProgress(data.module_id + 1);
    } catch (error) {
        console.error(error);
    }
};