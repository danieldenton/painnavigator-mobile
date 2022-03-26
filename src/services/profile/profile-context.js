import React, { useState, createContext, useContext } from "react";

import { patchUser } from "./profile-service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
    const [profileProgress, setProfileProgress] = useState(1);
    const [avePainPreStart, setAvgPainPreStart] = useState(5);
    const [programPaceGoal, setProgramPaceGoal] = useState(1);
    const [profileComplete, setProfileComplete] = useState(false);
    const { uid } = useContext(AuthenticationContext);

    const nextQuestion = () => {
        setProfileProgress((prevQuestion) => { return ( prevQuestion + 1 ) });
    };

    const previousQuestion = () => {
        setProfileProgress((prevQuestion) => { return ( prevQuestion - 1 ) });
    };

    const completeProfile = () => {
        const userUpdate = { uid, avePainPreStart, programPaceGoal };
        setProfileComplete(true);
        patchUser(userUpdate);
    };  

    return (
        <ProfileContext.Provider
            value={{
                profileProgress,
                setProfileProgress,
                nextQuestion,
                previousQuestion,
                avePainPreStart,
                setAvgPainPreStart,
                programPaceGoal,
                setProgramPaceGoal,
                profileComplete,
                completeProfile
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};