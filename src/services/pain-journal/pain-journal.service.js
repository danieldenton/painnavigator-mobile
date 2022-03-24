import axios from 'axios';
import camelize from "camelize";
import snakify from "../../../utils";

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

    const {painScore, painSetting, painFeeling, whoWith, copingStrategies, otherNotes, painAfter } = painJournal;
    
    // TODO: if there is a way to do this with a function please let me know
    const snakifiedJournal = {
        pain_score: painScore,
        pain_setting: painSetting,
        pain_feeling: painFeeling,
        who_with: whoWith,
        coping_strategies: copingStrategies,
        other_notes: otherNotes,
        pain_after: painAfter
    };

    axios.patch(`${baseUrl}/api/v1/pain_journals/${journalId}`, { pain_journal: snakifiedJournal })
    .then((response) => {
        console.log(response.data);
    });
};

export const postPainJournal = (painJournal) => {

    const {painScore, painSetting, painFeeling, whoWith, copingStrategies, otherNotes, painAfter } = painJournal;
    
    // TODO: if there is a way to do this with a function please let me know
    const snakifiedJournal = {
        pain_score: painScore,
        pain_setting: painSetting,
        pain_feeling: painFeeling,
        who_with: whoWith,
        coping_strategies: copingStrategies,
        other_notes: otherNotes,
        pain_after: painAfter
    };

    axios.post(`${baseUrl}/api/v1/pain_journals`, { pain_journal: snakifiedJournal })
    .then((response) => {
        console.log(response.data);
    });
    
};