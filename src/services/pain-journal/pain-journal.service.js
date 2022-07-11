import axios from 'axios';
import camelize from "camelize";
import { API_URL } from "@env"

export const destroyPainJournal = (journalId) => {
    axios.delete(`${API_URL}/api/v1/pain_journals/${journalId}`)
    .then((response) => {
        //console.log(response.data);
    });
};

export const getPainJournals = (setPainJournals) => {
    axios.get(`${API_URL}/api/v1/pain_journals`)
    .then( resp => {
        setPainJournals(camelize(resp.data.data)); 
    })
    //.catch(resp => console.log(resp))
};

export const patchPainJournal = (journalId, painJournal) => {
    axios.patch(`${API_URL}/api/v1/pain_journals/${journalId}`, { pain_journal: painJournal })
    .then((response) => {
        console.log(response.data);
    });
};

export const postPainJournal = (uid, painJournal, setPainJournals) => {
    axios.post(`${API_URL}/api/v1/pain_journals`, { pain_journal: painJournal, uid: uid })
    .then((response) => {
        const newJournal = response.data.data;
        setPainJournals(prevJournals => (
            [
                newJournal,
                ...prevJournals
            ]
        ))
    });
};