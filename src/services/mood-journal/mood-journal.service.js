import axios from "axios";
import { API_URL } from "@env";

export const getMoodJournals = async (uid) => {
  try {
    const response = await axios.get(`${API_URL}/api/v2/mood_journals`, {
      params: { uid: uid },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export async function postMoodJournal(uid, newMoodJournal) {
  try {
    const response = await axios.post(`${API_URL}/api/v1/mood_journals`, {
      mood_journal: newMoodJournal,
      uid: uid,
    });
    return response.data.data.attributes;
  } catch (error) {
    console.error(error);
  }
}

export async function patchMoodJournal(reviewJournal) {
  try {
    const response = await axios.patch(
      `${API_URL}/api/v1/mood_journals/${reviewJournal.id}`,
      { mood_journal: reviewJournal }
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error(error);
  }
}
