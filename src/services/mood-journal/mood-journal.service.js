import axios from 'axios';
import camelize from "camelize";
import { API_URL } from "@env"

export const destroyMoodJournal = (journalId) => {
    axios.delete(`${API_URL}/api/v1/mood_journals/${journalId}`)
    .then((response) => {
        //console.log(response.data);
    });
};

export const getMoodJournals = (setMoodJournals) => {
    axios.get(`${API_URL}/api/v1/mood_journals`)
    .then( resp => {
        setMoodJournals(camelize(resp.data.data)); 
    })
    //.catch(resp => console.log(resp))
};

export async function patchMoodJournal(journalId, moodJournal, setMoodJournals) {
    try {
        const response = await axios.patch(`${API_URL}/api/v1/mood_journals/${journalId}`, { mood_journal: moodJournal })
        const data = response.data.data.attributes;
        //console.log(data);
        setMoodJournals(prevJournals => prevJournals.map(journal => journal.id === journalId ?
            data
            :
            journal
        ))
    } catch (error) {
        console.error(error);
    }
};

export async function postMoodJournal(uid, moodJournal, setMoodJournals) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/mood_journals`, { mood_journal: moodJournal, uid: uid })
        const data = response.data.data.attributes;
        //console.log(data);
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