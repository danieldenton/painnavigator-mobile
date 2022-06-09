import React, { useState, createContext, useContext } from "react";
import { patchUser } from "./profile-service";
import { AuthenticationContext } from "../authentication/authentication.context";

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
    const [onboardingComplete, setOnboardingComplete] = useState(true);
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
    }

    const completeProfile = () => {
        setProfileComplete(true);
        updateProfile(2, profileData);
        setTimeout(() => {resetProfileStep(false)}, 1000);
    };  
    
    const completeOnboarding = () => {
        updateProfile(2, onboardingData);
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
        updateProfile(2, reviewProfile);
        setChanges("");
    }

    const updateProfile = (userId, data) => {
        patchUser(userId, data, setUserInfo);
    };

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
                updateProfile,
                userInfo,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};