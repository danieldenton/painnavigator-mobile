import axios from 'axios';
import camelize from "camelize";
import { baseUrl } from '../../infrastructure/config';

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

export const postPainJournal = (snakifiedPainJournal) => {
    axios.post(`${baseUrl}/api/v1/pain_journals`, { pain_journal: snakifiedPainJournal })
    .then((response) => {
        console.log(response.data);
    });
};