import axios from 'axios';
const baseUrl = 'https://3000-silver-slug-ggyxd3yy.ws-us34.gitpod.io';

export const addBookmarkToDataBase = (module_id) => {
    axios.post(`${baseUrl}/api/v1/education_modules`, {module_id})
    .then((response) => {
        console.log(response.data);
    });
};
