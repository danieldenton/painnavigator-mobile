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

export async function postPainJournal(uid, newPainJournal) {
  try {
    const response = await axios.post(`${API_URL}/api/v1/pain_journals`, {
      pain_journal: newPainJournal,
      uid: uid,
    });
    const data = response.data.data.attributes;
    return data;
  } catch (error) {
    console.error(error);
  }
}
