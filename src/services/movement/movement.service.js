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

export async function patchSkippedMovementUnits(uid, skippedMovementUnits) {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      skipped_movement_units: skippedMovementUnits,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function patchCompletedMovementUnits(uid, completedMovementUnits) {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      completed_movement_units: completedMovementUnits,
    });
  } catch (error) {
    console.error(error);
  }
}

