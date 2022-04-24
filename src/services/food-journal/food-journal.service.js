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

export const patchFoodJournal = (journalId, journalEntry) => {
    axios.patch(`${baseUrl}/api/v1/food_journals/${journalId}`, { food_journal: journalEntry })
    .then((response) => {
        return(camelize(response.data.data));
    });
};

export const postFoodJournal = (journalEntry) => {
    axios.post(`${baseUrl}/api/v1/food_journals`, { food_journal: journalEntry })
    .then((response) => {
        return(camelize(response.data.data));
    });
};