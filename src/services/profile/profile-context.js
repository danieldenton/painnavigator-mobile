import React, { useState, createContext, useContext } from "react";
import { patchUser } from "./profile-service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
    // userInfo set for testing
    const [userInfo, setUserInfo] = useState({name: "Stephen"});
    const [profileProgress, setProfileProgress] = useState(1);
    const [avgPainPreStart, setAvgPainPreStart] = useState(5);
    const [programPaceGoal, setProgramPaceGoal] = useState(1);
    // profileComplete set to true for testing
    const [profileComplete, setProfileComplete] = useState(true);
    const { user } = useContext(AuthenticationContext);

    const nextQuestion = () => {
        setProfileProgress((prevQuestion) => { return ( prevQuestion + 1 ) });
    };

    const previousQuestion = () => {
        setProfileProgress((prevQuestion) => { return ( prevQuestion - 1 ) });
    };

    const completeProfile = () => {
        const userUpdate = { avgPainPreStart: avgPainPreStart, programPaceGoal: programPaceGoal };
        patchUser(user.user.uid, userUpdate, setUserInfo);
    };  

    const completeOnboarding = () => {
        setProfileComplete(true);
    };

    return (
        <ProfileContext.Provider
            value={{
                userInfo,
                setUserInfo,
                profileProgress,
                setProfileProgress,
                nextQuestion,
                previousQuestion,
                avgPainPreStart,
                setAvgPainPreStart,
                programPaceGoal,
                setProgramPaceGoal,
                profileComplete,
                completeProfile,
                completeOnboarding
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};