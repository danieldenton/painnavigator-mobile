import axios from 'axios';
import camelize from "camelize";

const baseUrl = 'https://3000-silver-slug-ggyxd3yy.ws-us38.gitpod.io';

export const getFoodJournals = () => {
    axios.get(`${baseUrl}/api/v1/food_journals`)
    .then((response) => {
        return(camelize(response.data.data));
    })
    .catch(response => console.log(response))
};

export const patchFoodJournal = (journalId, foodJournal) => {
    axios.patch(`${baseUrl}/api/v1/food_journals/${journalId}`, { food_journal: foodJournal })
    .then((response) => {
        console.log(response.data);
    });
};

export const postFoodJournal = (newFoodJournalEntry) => {
    axios.post(`${baseUrl}/api/v1/food_journals`, { food_journal: newFoodJournalEntry })
    .then((response) => {
        console.log(response.data);
    });
};