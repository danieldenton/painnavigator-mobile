import React, { useState, createContext, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest, postUser } from "./authentication.service";
import { track } from "@amplitude/analytics-react-native";
import { ONBOARD_EVENTS } from "../../amplitude-events";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [userLoading, setUserLoading] = useState(null);
    // user set to true for testing
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [onboardStep, setOnboardStep] = useState(1);
    const [onboardingData, setOnboardingData] = useState({
        first_name: "", 
        last_name: "", 
        email: "",
        starting_pain_score: 5,
        pace: 1,
        commitment: 5
    });
    const [providerId, setProviderId] = useState(null);

    const changeOnboardEntry = (change, state) => {
        setOnboardingData(journal => ({
            ...journal,
            [state]: change
        }));
    };
    
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

    const onRegister = (password, repeatedPassword) => {
        const { first_name, last_name, email } = onboardingData;
        
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
                const strippedOnboardingData = {
                    provider_id: providerId,
                    first_name: onboardingData.first_name.trim(),
                    last_name: onboardingData.last_name.trim(),
                    email: onboardingData.email.trim(),
                    starting_pain_score: onboardingData.starting_pain_score,
                    pace: onboardingData.pace,
                    commitment: onboardingData.commitment
                }
                postUser(u.user.uid, strippedOnboardingData);
                setUser(u); 
            })
            .catch((e) => {
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

    const nextOnboardingStep = () => {
        if (onboardStep === 1) {
          track(ONBOARD_EVENTS.BASELINE_PAIN_SCALE);
        } else if (onboardStep === 2) {
          track(ONBOARD_EVENTS.BASELINE_COMMITTED_TO_PROGRAM);
        }
        setOnboardStep((prevPage) => {
          return prevPage + 1;
        });
      };

    const previousOnboardingStep = () => {
        setOnboardStep((prevPage) => { return ( prevPage - 1 ) });
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
                changeOnboardEntry,
                currentQuestion,
                error,
                isAuthenticated: !!user,
                nextOnboardingStep,
                nextQuestion,
                onboardStep,
                onLogin,
                onRegister,
                onboardingData,
                previousOnboardingStep,
                user,
                userLoading,
                setCurrentQuestion,
                signOut,
                setProviderId,
                setError,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};