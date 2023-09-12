import axios from 'axios';
import { API_URL } from "@env"

export const getMoodJournals = async (userUid) => {
    try {
        const response = await axios.get(`${API_URL}/api/v2/mood_journals`, { params: { uid: userUid } })
        return response.data
    } catch (error) {
        console.error(error);
    }
};

export async function postMoodJournal(uid, moodJournal, setMoodJournals) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/mood_journals`, { mood_journal: moodJournal, uid: uid })
        const data = response.data.data.attributes;
        setMoodJournals(prevJournals => (
            [
                data,
                ...prevJournals
            ]
        ))
    } catch (error) {
        console.error(error);
    }
};

export async function patchMoodJournal(journalId, moodJournal, setMoodJournals) {
    try {
        const response = await axios.patch(`${API_URL}/api/v1/mood_journals/${journalId}`, { mood_journal: moodJournal })
        const data = response.data.data.attributes;
        setMoodJournals(prevJournals => prevJournals.map(journal => journal.id === journalId ?
            data
            :
            journal
        ))
    } catch (error) {
        console.error(error);
    }
};

export const destroyMoodJournal = (journalId) => {
    axios.delete(`${API_URL}/api/v1/mood_journals/${journalId}`)
    .then((response) => {
    });
};