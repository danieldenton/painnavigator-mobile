import axios from "axios";
import { API_URL } from "@env";

export async function getMovementUnits(
  uid,
  setCompletedMovementModules,
  setSkippedMovementModules,
  setSavedMovementUnits
) {
  try {
    const response = await axios.get(`${API_URL}/api/v2/users/${uid}`);
    const data = response.data.data.attributes.movement_units;
    setCompletedMovementModules(data.completed_movement_units);
    setSkippedMovementModules(data.skipped_movement_units);
    setSavedMovementUnits(data.saved_movement_units);
  } catch (error) {
    console.error(error);
  }
}

export async function patchSavedMovementUnits(uid, savedMovementUnits) {
  try {
    await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
      saved_movement_units: savedMovementUnits,
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

