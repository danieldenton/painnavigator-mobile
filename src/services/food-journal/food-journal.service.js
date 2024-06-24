import axios from "axios";
import { API_URL } from "@env";

export const getFoodJournals = async (uid) => {
  try {
    const response = await axios.get(`${API_URL}/api/v2/food_journals`, {
      params: { uid: uid },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export async function postFoodJournal(journalEntry) {
  try {
    const response = await axios.post(`${API_URL}/api/v1/food_journals`, {
      food_journal: journalEntry,
      uid: uid,
    });
    const data = response.data.data.attributes;
    setFoodJournals((prevJournals) => [data, ...prevJournals]);
  } catch (error) {
    console.error(error);
  }
}

export async function patchFoodJournal(journalId, journalEntry) {
  try {
    const response = await axios.patch(
      `${API_URL}/api/v1/food_journals/${journalId}`,
      { food_journal: journalEntry }
    );
    const data = response.data.data.attributes;
    setFoodJournals((prevJournals) =>
      prevJournals.map((journal) => (journal.id === journalId ? data : journal))
    );
  } catch (error) {
    console.error(error);
  }
}
