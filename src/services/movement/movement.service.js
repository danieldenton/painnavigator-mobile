import axios from 'axios';
import { API_URL } from "@env"
import { movementModules } from "../../features/movement/data/movement-modules-data.json";

export async function post(module, uid, setMovementProgress, setCurrentModule) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/movement_module_completions`, { movement_module: module, uid: uid })
        const data = response.data.data.attributes;
        //console.log(data);
        const NEXT_MODULE_ID = data.module_id + 1;
        setMovementProgress(NEXT_MODULE_ID);
        const nextModule = movementModules.find(module => module.id === NEXT_MODULE_ID);
        setCurrentModule(nextModule);
    } catch (error) {
        console.error(error);
    }
};