import React, { useState, createContext, useContext, useEffect } from "react";
import { patchUser } from "./profile-service";
import { AuthenticationContext } from "../authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
    const [changes, setChanges] = useState("");
    // userInfo set for testing
    const [userInfo, setUserInfo] = useState({});
    const [reviewProfile, setReviewProfile] = useState({});
    const [onboardStep, setOnboardStep] = useState(1);
    const [onboardingData, setOnboardingData] = useState({
        starting_pain_score: 5,
        pace: 1,
        commitment: 5
    });
    const [onboardingComplete, setOnboardingComplete] = useState(false);
    const [profileData, setProfileData] = useState({
        phone: "",
        dob: "",
        starting_pain_duration: 0,
        gender: 0,
        activity_level: 0
    })
    const [profileStep, setProfileStep] = useState(1);
    const [profileComplete, setProfileComplete] = useState(false);
    const { user } = useContext(AuthenticationContext);

    const cancelEdits = () => {
        setReviewProfile(userInfo);
        setChanges("");
    };

    const completeProfile = () => {
        const profile = {
            ...profileData,
            profile_status: 1
        };
        updateProfile(user.user.uid, profile);
        setTimeout(() => {resetProfileStep(false)}, 1000);
    };  
    
    const completeOnboarding = () => {
        const onboardData = {
            ...onboardingData,
            onboard_status: 1
        };
        updateProfile(user.user.uid, onboardData);
        setOnboardingComplete(true);
    };

    const changeOnboardEntry = (change, state) => {
        setOnboardingData(journal => ({
            ...journal,
            [state]: change
        }));
    };

    const changeProfileEntry = (change, state) => {
        setProfileData(journal => ({
            ...journal,
            [state]: change
        }));
    };

    const editProfile = (change, state) => {
        setReviewProfile(prevProfile => (
            {
                ...prevProfile,
                [state]: change
            }
        ));
        setChanges(change);
    };

    const nextOnboardingStep = () => {
        setOnboardStep((prevPage) => { return ( prevPage + 1 ) });
    };

    const nextProfileStep = () => {
        setProfileStep((prevPage) => { return ( prevPage + 1 ) });
    };

    const previousOnboardingStep = () => {
        setOnboardStep((prevPage) => { return ( prevPage - 1 ) });
    };

    const previousProfileStep = () => {
        setProfileStep((prevPage) => { return ( prevPage - 1 ) });
    };

    const resetProfileStep = () => {
        setProfileData({
            phone: "",
            dob: "",
            starting_pain_duration: 0,
            gender: 0,
            activity_level: 0
        });
        setProfileStep(1);
    };

    const saveEdits = () => {
        updateProfile(user.user.uid, reviewProfile);
        setChanges("");
    }

    const updateProfile = (userId, data) => {
        patchUser(userId, data, setUserInfo, setOnboardingComplete, setProfileComplete);
    };

    const saveOnboardStatus = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@onboard_status", jsonValue);
        } catch (e) {
          console.log("error storing onboard_status", e);
        }
    };

    const loadOnboardStatus = async () => {
        try {
            const value = await AsyncStorage.getItem("@onboard_status");
            if (value !== null) {
                setOnboardingComplete(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading onboard_status", e);
        }
    };

    useEffect(() => {
        loadOnboardStatus();
    }, []);
    
    useEffect(() => {
        saveOnboardStatus(onboardingComplete);
    }, [onboardingComplete]);

    const saveProfileComplete = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("@profile_status", jsonValue);
        } catch (e) {
            console.log("error storing profile_status", e);
        }
    };

    const loadProfileComplete = async () => {
        try {
            const value = await AsyncStorage.getItem("@profile_status");
            if (value !== null) {
                setProfileComplete(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading profile_status", e);
        }
    };

    useEffect(() => {
        loadProfileComplete();
    }, []);

    useEffect(() => {
        saveProfileComplete(profileComplete);
    }, [profileComplete]);

    return (
        <ProfileContext.Provider
            value={{
                cancelEdits,
                changes,
                changeOnboardEntry,
                changeProfileEntry,
                completeOnboarding,
                completeProfile,
                editProfile,
                nextOnboardingStep,
                nextProfileStep,
                onboardingData,
                onboardStep,
                onboardingComplete,
                previousOnboardingStep,
                previousProfileStep,
                profileComplete,
                profileData,
                profileStep,
                resetProfileStep,
                reviewProfile,
                saveEdits,
                setReviewProfile,
                setUserInfo,
                setOnboardStep,
                setProfileComplete,
                updateProfile,
                userInfo
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};