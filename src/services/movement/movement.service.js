import axios from 'axios';
import { API_URL } from "@env"
import { movementModules } from "../../features/movement/data/movement-modules-data.json";

export async function patchSavedMovementUnits(uid, savedMovementUnits) {
    try {
        await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
            saved_movement_units: savedMovementUnits,
        })
    } catch (error) {
        console.log("saved")
        console.error(error)
    }
}

export async function patchSkippedMovementUnits(uid, skippedMovementUnits) {
    try {
        await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
            skipped_movement_units: skippedMovementUnits,
        })
    } catch (error) {
        console.log("skipped")
        console.error(error)
    }
}

export async function patchCompletedMovementUnits(uid, completedMovementUnits) {
    try {
        await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
            completed_movement_units: completedMovementUnits,
        })
    } catch (error) {
        console.log("completed")
        console.error(error)
    }
}

export async function post(module, uid, setMovementProgress, setCurrentModule) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/movement_module_completions`, { movement_module: module, uid: uid })
        const data = response.data.data.attributes;
        const NEXT_MODULE_ID = data.module_id + 1;
        setMovementProgress(NEXT_MODULE_ID);
        const nextModule = movementModules.find(module => module.id === NEXT_MODULE_ID);
        setCurrentModule(nextModule);
    } catch (error) {
        console.error(error);
    }
};