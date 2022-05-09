import axios from 'axios';
const baseUrl = 'https://3000-silver-slug-ggyxd3yy.ws-us34.gitpod.io';

export const postEducationModule = (moduleId, status) => {
    // TODO: update to post status of module record (0: completed, 1: skipped)
    axios.post(`${baseUrl}/api/v1/education_modules`, { moduleId })
    .then((response) => {
        console.log(response.data);
    });
};

// TODO: add patchEducationModule function to update status of skipped modules after watching
