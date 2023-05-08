import React, { useState, createContext, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest, patchExpoPushToken, postUser, patchCompletedProgram } from "./authentication.service";
import { hopesOptions } from '../../features/account/data/hopes-to-achieve.json'


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, expoPushToken }) => {
    const [userLoading, setUserLoading] = useState(null);
    // user set to true for testing
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [onboardStep, setOnboardStep] = useState(0);
    const [onboardingData, setOnboardingData] = useState({
        first_name: "", 
        last_name: "", 
        email: "",
        startingPainScore: "",
        enjoymentOfLife: 5,
        activityInterference: 5,
        hopesToAchieve: new Array()
    });
    const [providerId, setProviderId] = useState(null);
    const [completedProgram, setCompletedProgram] = useState(false)

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

    const findHopesToAchieve = () => {
        const selectedHopes = onboardingData.hopesToAchieve;
        const text = hopesOptions.filter(option => selectedHopes.includes(option.id));
        const hopesToAchieve = text.map((option) => option.option);
        return String(hopesToAchieve).replace(/,/g, ', ');
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
                const hopes_to_achieve = findHopesToAchieve()
                console.log(hopes_to_achieve)
                const strippedOnboardingData = {
                    provider_id: providerId,
                    first_name: onboardingData.first_name.trim(),
                    last_name: onboardingData.last_name.trim(),
                    email: onboardingData.email.trim(),
                    starting_pain_score: onboardingData.startingPainScore,
                    enjoyment_of_life: onboardingData.enjoymentOfLife,
                    activity_interference: onboardingData.activityInterference,
                    hopes_to_achieve: hopes_to_achieve,
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

    const signOut = async () => {
        try {
          setUser(null);
          await AsyncStorage.removeItem("@user");
        } catch (e) {
          console.log("error clearing user", e);
        }
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

    const completeProgram = (uid) => {
        patchCompletedProgram(uid)
        setCompletedProgram(true)
    }

    useEffect(() => {
        loadUser();
    }, []);

    useEffect(() => {
        saveUser(user);
    }, [user]);

    useEffect(() => {
        if (user && expoPushToken) {
            patchExpoPushToken(user.user.uid, expoPushToken)
        }
    }, [user, expoPushToken])
    
    
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
                setOnboardingData,
                onboardingData,
                previousOnboardingStep,
                user,
                userLoading,
                setCurrentQuestion,
                signOut,
                setProviderId,
                expoPushToken,
                setError,
                setCompletedProgram,
                completedProgram,
                completeProgram
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};