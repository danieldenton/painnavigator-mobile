import React, { useState, createContext, useContext, useEffect } from "react";
import { patchUser } from "./profile-service";
import { AuthenticationContext } from "../authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { track } from "@amplitude/analytics-react-native";
import { PROFILE_EVENTS } from "../../amplitude-events";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
    const [changes, setChanges] = useState("");
    // userInfo set for testing
    const [userInfo, setUserInfo] = useState({});
    const [reviewProfile, setReviewProfile] = useState({});
    const [profileData, setProfileData] = useState({
        phone: "",
        dob: "",
        starting_pain_duration: 0,
        gender: 0,
        activity_level: 0
    })
    const [profileStep, setProfileStep] = useState(0);
    const [profileComplete, setProfileComplete] = useState(false);
    const { user } = useContext(AuthenticationContext);

    const cancelEdits = () => {
        setReviewProfile(userInfo);
        setChanges("");
    };

    const completeProfile = () => {
        const profile = {
            ...profileData,
            profile_status: 1,
            phone: postPhoneFormat(profileData.phone),
            dob: dobFormat(profileData.dob)

        };
        track(PROFILE_EVENTS.COMPLETE_PROFILE_SET_UP);
        updateProfile(user.user.uid, profile);
        //setTimeout(() => {resetProfileStep(false)}, 1000);
    };  

    const phoneFormat = (p) => {
        if (p.length === 10) {
            return `(${p.slice(0, 3)})${p.slice(3, 6)}-${p.slice(6)}`;
        } 
    }

    const postPhoneFormat = (p) => {
        if (p.startsWith('+1')) {
            return `${p.slice(0, 2)}(${p.slice(2, 5)})${p.slice(5, 8)}-${p.slice(8)}`
        }
        else if (p.length === 10) {
            return '+1' + p
        } 
    }

    const dobFormat = (d) => {
        if (d.length === 8) {
            return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
        } 
    }

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
    const nextProfileStep = () => {
        setProfileStep((prevPage) => { return ( prevPage + 1 ) });
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
        patchUser(userId, data, setUserInfo, setProfileComplete);
    };

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

    const saveUserInfo = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("@user_info", jsonValue);
        } catch (e) {
            console.log("error storing user_info", e);
        }
    };

    const loadUserInfo = async () => {
        try {
            const value = await AsyncStorage.getItem("@user_info");
            if (value !== null) {
                setUserInfo(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading user_info", e);
        }
    };

    useEffect(() => {
        loadUserInfo();
    }, []);

    useEffect(() => {
        saveUserInfo(userInfo);
    }, [userInfo]);

    return (
        <ProfileContext.Provider
            value={{
                cancelEdits,
                changes,
                changeProfileEntry,
                completeProfile,
                editProfile,
                nextProfileStep,
                previousProfileStep,
                profileComplete,
                profileData,
                profileStep,
                resetProfileStep,
                reviewProfile,
                saveEdits,
                setReviewProfile,
                setUserInfo,
                setProfileComplete,
                updateProfile,
                userInfo,
                phoneFormat,
                dobFormat
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};