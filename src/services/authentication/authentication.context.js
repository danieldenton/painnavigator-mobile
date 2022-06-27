import React, { useState, createContext, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest, postUser, get } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [userLoading, setUserLoading] = useState(null);
    // user set to true for testing
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    
    const onLogin = (email, password) => {
        setUserLoading(true);
        loginRequest(email, password).then((u) => {
            setUser(u);
        }).catch((e) => {
            setError(e.toString());
        }).finally(() => {
            setUserLoading(false);
        })
    };

    const nextQuestion = () => {
        setCurrentQuestion((prevQuestion) => { return ( prevQuestion + 1 ) });
    };

    const onRegister = (first_name, last_name, email, password, repeatedPassword) => {
        if(!first_name || !last_name) {
            setError("Error: Please provide your name");
            return;
        }
        
        if(password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }

        setUserLoading(true);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((u) => {
                setUser(u);
                postUser(u.user.uid, first_name, last_name, email);
            }).catch((e) => {
                // TODO: To handle case where e is not an Error, consider checking the type or wrapping in a try-catch,
                setError(e.toString());
            }).finally(() => {
                setUserLoading(false);
            })
    };

    const signOut = () => {
        setUser(null);
    };

    const saveUser = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@user", jsonValue);
        } catch (e) {
          console.log("error storing user", e);
        }
    };

    const getUser = (setUserInfo, setMessages, setEducationProgress, setOnboardingComplete, setProfileComplete, setLastCompletedModule, setMovementProgress, setLastMovement) => {
        get(user.user.uid, setUserInfo, setMessages, setEducationProgress, setOnboardingComplete, setProfileComplete, setLastCompletedModule, setMovementProgress, setLastMovement);
    };
    
    const loadUser = async () => {
        try {
            const value = await AsyncStorage.getItem("@user");
            if (value !== null) {
                setUser(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading user", e);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);
    
    useEffect(() => {
        saveUser(user);
    }, [user]);

    return (
        <AuthenticationContext.Provider
            value={{
                currentQuestion,
                error,
                getUser,
                isAuthenticated: !!user,
                nextQuestion,
                onLogin,
                onRegister,
                user,
                userLoading,
                setCurrentQuestion,
                signOut
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};