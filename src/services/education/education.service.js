import axios from 'axios';
import { API_URL } from "@env"

export const postEducationModule = (module, setLastCompletedModule, uid) => {
    axios.post(`${API_URL}/api/v1/education_module_completions`, { education_module_completion: module, uid: uid })
    .then((response) => {
        const moduleData = response.data.data;
        setLastCompletedModule(moduleData.attributes.date_time_value);
    })
    .catch(resp => console.log(resp));
};