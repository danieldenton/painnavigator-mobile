import axios from 'axios';
import { API_URL } from "@env"

export const getFoodJournals = (setFoodJournals) => {
    axios.get(`${API_URL}/api/v1/food_journals`)
    .then((response) => {
        setFoodJournals(response.data.data);
    })
    .catch(response => console.log(response))
};

export const patchFoodJournal = (journalId, journalEntry, setFoodJournals) => {
    axios.patch(`${API_URL}/api/v1/food_journals/${journalId}`, { food_journal: journalEntry })
    .then((response) => {
        const updatedJournal = response.data.data;
        setFoodJournals(prevFoodJournals => prevFoodJournals.map(
            journal => journal.attributes.id === journalId ?
                updatedJournal
                :
                journal
        ));
    });
};

export const postFoodJournal = (uid, journalEntry, setFoodJournals) => {
    axios.post(`${API_URL}/api/v1/food_journals`, { food_journal: journalEntry, uid: uid })
    .then((response) => {
        const newJournal = response.data.data;
        setFoodJournals(prevJournals => (
            [
                newJournal,
                ...prevJournals
            ]
        ))
    });
};