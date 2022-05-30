import axios from 'axios';
import camelize from "camelize";
import { baseUrl } from '../../infrastructure/config';

export const destroyPainJournal = (journalId) => {
    axios.delete(`${baseUrl}/api/v1/pain_journals/${journalId}`)
    .then((response) => {
        //console.log(response.data);
    });
};

export const getPainJournals = (setPainJournals) => {
    axios.get(`${baseUrl}/api/v1/pain_journals`)
    .then( resp => {
        setPainJournals(camelize(resp.data.data)); 
    })
    //.catch(resp => console.log(resp))
};

export const patchPainJournal = (journalId, painJournal) => {
    axios.patch(`${baseUrl}/api/v1/pain_journals/${journalId}`, { pain_journal: painJournal })
    .then((response) => {
        console.log(response.data);
    });
};

export const postPainJournal = (painJournal, setPainJournals) => {
    axios.post(`${baseUrl}/api/v1/pain_journals`, { pain_journal: painJournal })
    .then((response) => {
        const newJournal = response.data.data;
        console.log(newJournal);
        setPainJournals(prevJournals => (
            [
                newJournal,
                ...prevJournals
            ]
        ))
    });
};