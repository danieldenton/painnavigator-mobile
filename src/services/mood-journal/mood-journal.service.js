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

export const patchMoodJournal = (journalId, moodJournal) => {
    axios.patch(`${API_URL}/api/v1/mood_journals/${journalId}`, { mood_journal: moodJournal })
    .then((response) => {
        //console.log(response.data);
    });
};

export const postMoodJournal = (uid, moodJournal, setMoodJournals) => {
    axios.post(`${API_URL}/api/v1/mood_journals`, { mood_journal: moodJournal, uid: uid })
    .then((response) => {
        const newJournal = response.data.data;
        console.log(newJournal);
        setMoodJournals(prevJournals => (
            [
                newJournal,
                ...prevJournals
            ]
        ))
    });
};