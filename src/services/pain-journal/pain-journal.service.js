import axios from 'axios';
import camelize from "camelize";

const baseUrl = 'https://3000-silver-slug-ggyxd3yy.ws-us38.gitpod.io';

export const getPainJournals = (setPainJournals, setPainJournalsLoaded) => {
    axios.get(`${baseUrl}/api/v1/pain_journals`)
    .then( resp => {
        setPainJournals(camelize(resp.data.data)); 
        setPainJournalsLoaded(true);
    })
    .catch(resp => console.log(resp))
};

export const postPainJournal = (
    painScore, 
    painSetting, 
    painFeeling, 
    whoWith, 
    copingStrategies, 
    otherNotes, 
    painAfter
    ) => {

    const pain_score = painScore;
    const pain_setting = painSetting;
    const pain_feeling = painFeeling;
    const who_with = whoWith;
    const coping_strategies = String(copingStrategies);
    const other_notes = otherNotes; 
    const pain_after_episode = painAfter;

    axios.post(`${baseUrl}/api/v1/pain_journals`, {
        pain_score,
        pain_setting,
        pain_feeling,
        who_with,
        coping_strategies,
        other_notes,
        pain_after_episode
    })
    .then((response) => {
        console.log(response.data);
    });
    
};