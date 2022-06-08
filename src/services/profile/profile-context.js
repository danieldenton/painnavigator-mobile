import React, { useState, createContext, useContext } from "react";
import { patchUser } from "./profile-service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
    // userInfo set for testing
    const [userInfo, setUserInfo] = useState({ 
        name: "Stephen", 
        uid: "4TN47zasIcgy7zezXDn8g2rPRCG2" 
    });
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

    const nextOnboardingStep = () => {
        setOnboardStep((prevPage) => { return ( prevPage + 1 ) });
    };

    const previousOnboardingStep = () => {
        setOnboardStep((prevPage) => { return ( prevPage - 1 ) });
    };

    const nextProfileStep = () => {
        setProfileStep((prevPage) => { return ( prevPage + 1 ) });
    };

    const previousProfileStep = () => {
        setProfileStep((prevPage) => { return ( prevPage - 1 ) });
    };

    const completeProfile = () => {
        setProfileComplete(true);
        patchUser(1, profileData);
        setTimeout(() => {resetProfileStep(false)}, 1000);
    };  
    
    const completeOnboarding = () => {
        patchUser(user.user.uid, onboardingData, setUserInfo);
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

    return (
        <ProfileContext.Provider
            value={{
                changeOnboardEntry,
                changeProfileEntry,
                completeOnboarding,
                completeProfile,
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
                setUserInfo,
                setOnboardStep,
                userInfo,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};