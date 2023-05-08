import axios from 'axios';
import camelize from "camelize";
import { API_URL, SERVER_API_URL } from "@env"

export const destroyPainJournal = (journalId) => {
    axios.delete(`${API_URL}/api/v1/pain_journals/${journalId}`)
    .then((response) => {
    });
};

export const getPainJournals = (setPainJournals) => {
    axios.get(`${API_URL}/api/v1/pain_journals`)
    .then( resp => {
        setPainJournals(camelize(resp.data.data)); 
    })
    //.catch(resp => console.log(resp))
};

export async function patchPainJournal(journalId, painJournal, setPainJournals) {
    try {
        const response = await axios.patch(`${API_URL}/api/v1/pain_journals/${journalId}`, { pain_journal: painJournal })
        const data = response.data.data.attributes;
        //console.log(data);
        setPainJournals(prevJournals => prevJournals.map(journal => journal.id === journalId ?
            data
            :
            journal
        ))
    } catch (error) {
        console.error(error);
    }
};

export async function postPainJournal(uid, painJournal, setPainJournals) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/pain_journals`, { pain_journal: painJournal, uid: uid })
        const data = response.data.data.attributes;
        setPainJournals(prevJournals => (
            [
                data,
                ...prevJournals
            ]
        ))
    } catch (error) {
        console.error(error);
    }
};