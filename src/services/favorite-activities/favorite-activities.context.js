import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { patch, post } from "../favorite-activities/favorite-activities.service";
import { AuthenticationContext } from "../authentication.context";

export const FavoriteActivitiesContext = createContext();

export const FavoriteActivitiesContextProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [favoriteActivities, setFavoriteActivities] = useState([]);
    const [additionalActivities, setAdditionalActivities] = useState([
        {
            id: 1,
            option: "",
            selected: true
        },
        {
            id: 2,
            option: "",
            selected: true
        },
        {
            id: 3,
            option: "",
            selected: true
        },
        {
            id: 4,
            option: "",
            selected: true
        },
        {
            id: 5,
            option: "",
            selected: true
        }
    ]);
    const [reviewActivities, setReviewActivities] = useState([]);
    const [inputsShown, setInputsShown] = useState(1);
    const { uid } = useContext(AuthenticationContext);

    useEffect(() => {
        setReviewActivities(selectedActivities);
    }, [selectedActivities]);

    const addInput = () => {
        setInputsShown(prev => prev + 1);
    };

    const changeAdditionalActivities = (change, inputId) => {
        const newActivities = additionalActivities.map(item => item.id === inputId ?
            {
                ...item,
                option: change
            }
            :
            item
        );
        setAdditionalActivities(newActivities);
    };

    const completeActivities = () => {
        setFavoriteActivities(reviewActivities);
        setTimeout(() => {resetActivities(false)}, 1000);
        post(uid, {activities: JSON.stringify(reviewActivities)});
    };

    const addActivity = (activityId) => {
        setSelectedActivities(prevActivities => [...prevActivities, activityId]);
    };

    const reAddActivity = (activityId) => {
        setReviewActivities(prevActivities => [...prevActivities, activityId]);
    };

    const removeActivity = (activityId) => {
        const newActivities = selectedActivities.filter(activity => activity !== activityId);
        setSelectedActivities(newActivities);
    };

    const removeAddedActivity = (id) => {
        const newActivities = additionalActivities.map(item => item.id === id ?
            {
                ...item,
                selected: false
            }
            :
            item
        );
        setAdditionalActivities(newActivities);
    };

    const reAddAddedActivity = (id) => {
        const newActivities = additionalActivities.map(item => item.id === id ?
            {
                ...item,
                selected: true
            }
            :
            item
        );
        setAdditionalActivities(newActivities);
    }

    const removeReviewActivity = (activityId) => {
        const newActivities = reviewActivities.filter(activity => activity !== activityId);
        setReviewActivities(newActivities);
    };

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const resetActivities = () => {
        setCurrentPage(1);
        setSelectedActivities([]);
    };

    const saveFavoriteActivities = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("@favorite_activities", jsonValue);
        } catch (e) {
            console.log("error storing favorites_activities", e);
        }
    };

    const loadFavoriteActivities = async () => {
        try {
            const value = await AsyncStorage.getItem("@favorite_activities");
            if (value !== null) {
                setFavoriteActivities(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading favorite_activities", e);
        }
    };

    useEffect(() => {
        loadFavoriteActivities();
    }, []);

    useEffect(() => {
        saveFavoriteActivities(favoriteActivities);
    }, [favoriteActivities]);

    return (
        <FavoriteActivitiesContext.Provider
            value={{
                addActivity,
                additionalActivities,
                addInput,
                changeAdditionalActivities,
                completeActivities,
                currentPage,
                favoriteActivities,
                inputsShown,
                nextPage,
                previousPage,
                removeActivity,
                removeAddedActivity,
                removeReviewActivity,
                reAddActivity,
                reAddAddedActivity,
                resetActivities,
                reviewActivities,
                selectedActivities
            }}
        >
            {children}
        </FavoriteActivitiesContext.Provider>
    );
};