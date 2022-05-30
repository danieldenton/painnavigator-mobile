import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoriteActivitiesContext = createContext();

export const FavoriteActivitiesContextProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [favoriteActivities, setFavoriteActivities] = useState([]);
    const [additionalActivities, setAdditionalActivities] = useState({});
    const [inputsShown, setInputsShown] = useState(1);

    const addInput = () => {
        setInputsShown(prev => prev + 1);
    };

    const changeAdditionalActivities = (change, state) => {
        setAdditionalActivities(activity => ({
            ...activity,
            [state]: change
        }));
    };

    const addActivity = (activityId) => {
        setFavoriteActivities(prevActivities => [...prevActivities, activityId]);
    };

    const removeActivity = (activityId) => {
        const newActivities = favoriteActivities.filter(activity => activity !== activityId);
        setFavoriteActivities(newActivities);
    };

    const completePleasantActivities = () => {
        const cognitiveDistortions = findCognitiveDistortions();
        
        const newFavoriteActivities = {
            feeling: moodJournal.feeling,
            intensity: moodJournal.intensity, 
            situation: moodJournal.situation, 
            who_i_was_with: moodJournal.whoIWasWith,
            primary_thought: moodJournal.primaryThought,
            cognitive_distortions: cognitiveDistortions
        };
        postFavoriteActivities(newFavoriteActivities, setFavoriteActivitiess);
        setTimeout(() => {resetFavoriteActivities(false)}, 1000);
    };

    const findCognitiveDistortions = () => {
        const selectedCognitiveDistortions = moodJournal.cognitiveDistortions;
        const options = moodJournalQuestions[4].options;
        const text = options.filter(option => selectedCognitiveDistortions.includes(option.id));
        const cognitiveDistortions = text.map((option) => option.option);
        return String(cognitiveDistortions).replace(/,/g, ', ');
    };

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const resetFavoriteActivities = () => {
        setCurrentPage(1);
    };

    return (
        <FavoriteActivitiesContext.Provider
            value={{
                addActivity,
                additionalActivities,
                addInput,
                changeAdditionalActivities,
                currentPage,
                favoriteActivities,
                inputsShown,
                nextPage,
                previousPage,
                removeActivity
            }}
        >
            {children}
        </FavoriteActivitiesContext.Provider>
    );
};