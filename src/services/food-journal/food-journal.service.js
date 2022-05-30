import axios from 'axios';
import camelize from "camelize";
import { baseUrl } from '../../infrastructure/config';

export const getFoodJournals = (setFoodJournals) => {
    axios.get(`${baseUrl}/api/v1/food_journals`)
    .then((response) => {
        setFoodJournals(camelize(response.data.data));
    })
    .catch(response => console.log(response))
};

export const patchFoodJournal = (journalId, journalEntry, setFoodJournals) => {
    axios.patch(`${baseUrl}/api/v1/food_journals/${journalId}`, { food_journal: journalEntry })
    .then((response) => {
        const updatedJournal = camelize(response.data.data);
        setFoodJournals(prevFoodJournals => prevFoodJournals.map(
            journal => journal.attributes.id === journalId ?
                updatedJournal
                :
                journal
        ));
    });
};

export const postFoodJournal = (journalEntry, setFoodJournals) => {
    axios.post(`${baseUrl}/api/v1/food_journals`, { food_journal: journalEntry })
    .then((response) => {
        const newJournal = camelize(response.data.data);
        console.log(newJournal);
        setFoodJournals(prevJournals => (
            [
                newJournal,
                ...prevJournals
            ]
        ))
    });
};