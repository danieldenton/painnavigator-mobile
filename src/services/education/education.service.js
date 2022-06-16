import axios from 'axios';
import { baseUrl } from "../../infrastructure/config";

export const postEducationModule = (module, setLastCompletedModule, uid) => {
    axios.post(`${baseUrl}/api/v1/education_modules`, { education_module: module, uid: uid })
    .then((response) => {
        const moduleData = response.data.data;
        console.log(moduleData);
        setLastCompletedModule(moduleData.attributes);
    });
};

// TODO: add patchEducationModule function to update status of skipped modules after watching
