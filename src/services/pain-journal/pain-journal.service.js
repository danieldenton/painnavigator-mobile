import axios from 'axios';
import camelize from "camelize";

const baseUrl = 'https://3000-silver-slug-ggyxd3yy.ws-us38.gitpod.io';

export const getPainJournals = (setPainJournals, setPainJournalsLoaded) => {
    axios.get(`${baseUrl}/api/v1/pain_journals`)
    .then( resp => {
        setPainJournals(camelize(resp.data.data)); 
        setPainJournalsLoaded(true);
    })
    //.catch(resp => console.log(resp))
};

export const patchPainJournal = (journalId, painJournal) => {
    axios.patch(`${baseUrl}/api/v1/pain_journals/${journalId}`, { pain_journal: painJournal })
    .then((response) => {
        console.log(response.data);
    });
};

export const postPainJournal = (painJournal) => {
    axios.post(`${baseUrl}/api/v1/pain_journals`, { pain_journal: painJournal })
    .then((response) => {
        console.log(response.data);
    });
};