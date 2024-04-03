import axios from "axios";
import { API_URL } from "@env";

export async function patchSavedMovementVideos(uid, savedMovementVideos) {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      saved_movement_units: savedMovementVideos,
    });
  } catch (error) {
    console.error(error);
  }
}
