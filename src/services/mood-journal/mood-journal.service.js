import axios from 'axios';
import camelize from "camelize";

const baseUrl = 'https://3000-silver-slug-ggyxd3yy.ws-us38.gitpod.io';

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

export const postMoodJournal = (moodJournal) => {
    axios.post(`${baseUrl}/api/v1/mood_journals`, { mood_journal: moodJournal })
    .then((response) => {
        console.log(response.data);
    });
};