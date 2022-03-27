import React, { useState, createContext } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { loginRequest, postUser } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(null);
    const [user, setUser] = useState(true);
    const [error, setError] = useState(null);
    //const uid = user.user.uid;
    const uid = "WpeTZB1VYGbQe4nZEbHQvH0akUt1"

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [avePainPreStart, setAvgPainPreStart] = useState(5);
    const [programPaceGoal, setProgramPaceGoal] = useState(1);
    const [profileComplete, setProfileComplete] = useState(false);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password).then((u) => {
            setUser(u);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        })
    };

    const nextQuestion = () => {
        setCurrentQuestion((prevQuestion) => { return ( prevQuestion + 1 ) });
    };

    const onRegister = (name, email, password, repeatedPassword) => {
        if(!name) {
            setError("Error: Please provide your name");
            return;
        }
        
        if(password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((u) => {
                setUser(u);
                postUser(uid, name);
                setIsLoading(false);
            }).catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                currentQuestion,
                setCurrentQuestion,
                nextQuestion,
                avePainPreStart,
                setAvgPainPreStart,
                programPaceGoal,
                setProgramPaceGoal,
                profileComplete,
                setProfileComplete,
                isAuthenticated: !!user,
                user,
                uid,
                isLoading,
                error,
                onLogin,
                onRegister
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};