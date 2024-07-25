import axios from "axios";
import { API_URL } from "@env";

export async function getMovementModuleCompletions(uid) {
  try {
    const response = await axios.get(
      `${API_URL}/api/v2/movement_module_completions?uid=${uid}`
    );
    return response.data.data
  } catch (error) {
    console.error(error);
  }
}

export async function postMovementModuleCompletion(module, uid) {
  try {
    const response = await axios.post(
      `${API_URL}/api/v2/movement_module_completions`,
      { movement_module: module, uid: uid }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function patchSavedMovementVideos(uid, savedMovementVideos) {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      saved_movement_units: savedMovementVideos,
    });
  } catch (error) {
    console.error(error);
  }
}
