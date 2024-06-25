import axios from "axios";
import { API_URL } from "@env";

export const patchCompletedProgram = async (uid, data) => {
    try {
      await axios.patch(`${API_URL}/api/v2/users/${uid}`, data);
    } catch (error) {
      console.error(error);
    }
  };