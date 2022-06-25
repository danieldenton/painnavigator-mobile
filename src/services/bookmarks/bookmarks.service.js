import axios from 'axios';
import { API_URL } from "@env"

export const addBookmarkToDataBase = (module_id) => {
    axios.post(`${API_URL}/api/v1/education_modules`, {module_id})
    .then((response) => {
    });
};
