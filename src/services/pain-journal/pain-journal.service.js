import axios from "axios";
import { API_URL } from "@env";

export const getPainJournals = async (uid) => {
  try {
    const response = await axios.get(`${API_URL}/api/v2/pain_journals`, {
      params: { uid: uid },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
