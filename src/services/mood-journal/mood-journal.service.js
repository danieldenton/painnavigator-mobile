import axios from 'axios';
import camelize from "camelize";
import { baseUrl } from '../../infrastructure/config';

export const getMoodJournals = (setMoodJournals) => {
    axios.get(`${baseUrl}/api/v1/mood_journals`)
    .then( resp => {
        setMoodJournals(camelize(resp.data.data)); 
    })
    //.catch(resp => console.log(resp))
};

export const patchMoodJournal = (journalId, moodJournal) => {
    axios.patch(`${baseUrl}/api/v1/mood_journals/${journalId}`, { mood_journal: moodJournal })
    .then((response) => {
        console.log(response.data);
    });
};

export const postMoodJournal = (newMoodJournal) => {
    axios.post(`${baseUrl}/api/v1/mood_journals`, { mood_journal: newMoodJournal })
    .then((response) => {
        console.log(response.data);
    });
};