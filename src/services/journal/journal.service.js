import axios from 'axios';
import { API_URL } from "@env"

export const getPainGraph = (setPainGraphData) => {
    axios.get(`${API_URL}/api/v1/journals`)
    .then( resp => {
        setPainGraphData((resp.data.data)); 
    })
    //.catch(resp => console.log(resp))
};