import axios from 'axios';
import { API_URL } from "@env"

export async function postEducationModule(uid, module) {
    try {
        const response = await axios.post(`${API_URL}/api/v2/education_module_completions`, { 
            uid: uid, 
            education_module_completion: module
        })
       return response
    } catch (error) {
        console.error(error);
    }
};

export const patchCompleteSkippedEducationModule = async (uid, module) => {
    try {
        const response = await axios.patch(`${API_URL}/api/v2/education_module_completions`, {
            uid: uid, 
            education_module_completion: module, 
            status: "completed"
        })
        return response
    } catch (error) {
        console.error(error);
    }
}