import React, { useState, createContext, useEffect, useContext } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest, patchExpoPushToken, postUser, patchCompletedProgram } from "./authentication.service";
import { hopesOptions } from '../../features/account/data/onboard-data.json'


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, expoPushToken }) => {
    const [userLoading, setUserLoading] = useState(null);
    // user set to true for testing
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [step, setStep] = useState(0);
    const [onboardingData, setOnboardingData] = useState({
        first_name: "", 
        last_name: "", 
        email: "",
        startingPainScore: 5,
        enjoymentOfLife: 5,
        activityInterference: 5,
        hopesToAchieve: new Array(),
        anxious: "",
        unableToStopWorrying: "",
        littleInterestOrPleasure: "",
        depressed: "",
        painInjections: "",
        spineSurgery: ""
    });
    const [providerId, setProviderId] = useState(null);
    const [completedProgram, setCompletedProgram] = useState(false)
    const [outcomeData, setOutcomeData] = useState({
        recommendation: 5,
        enjoymentOfLife: 5,
        activityInterference: 5,
        anxious: "",
        unableToStopWorrying: "",
        littleInterestOrPleasure: "",
        depressed: "" 
    })
    const [educationProgram, setEducationProgram] = useState(1)
    const [lastDateOnApp, setLastDateOnApp] = useState("")
    const [tour, setTour] = useState(null) 

    const changeOnboardEntry = (change, state) => {
        setOnboardingData(entry => ({
            ...entry,
            [state]: change
        }));
    };

    const changeOutcomeEntry = (change, state) => {
        setOutcomeData(entry => ({
            ...entry,
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

    function resetPassword(email) {
        return firebase.auth().sendPasswordResetEmail(email)
    }

    const nextQuestion = () => {
        setCurrentQuestion((prevQuestion) => { return ( prevQuestion + 1 ) });
    };

    const findHopesToAchieve = () => {
        const selectedHopes = onboardingData.hopesToAchieve;
        const text = hopesOptions.filter(option => selectedHopes.includes(option.id));
        const hopes = text.map((option) => option.option);
        return String(hopes).replace(/,/g, ', ');
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
                const strippedOnboardingData = {
                    provider_id: providerId,
                    first_name: onboardingData.first_name.trim(),
                    last_name: onboardingData.last_name.trim(),
                    email: onboardingData.email.trim(),
                    starting_pain_score: onboardingData.startingPainScore,
                    enjoyment_of_life: onboardingData.enjoymentOfLife,
                    activity_interference: onboardingData.activityInterference,
                    hopes_to_achieve: hopes_to_achieve,
                    anxious: onboardingData.anxious,
                    unable_to_stop_worrying: onboardingData.unableToStopWorrying,
                    little_interest_or_pleasure: onboardingData.littleInterestOrPleasure,
                    depressed: onboardingData.depressed,
                    pain_injections: onboardingData.painInjections,
                    spine_surgery: onboardingData.spineSurgery,
                    education_program: educationProgram
                }
                postUser(u.user.uid, strippedOnboardingData);
                setUser(u); 
                setStep(0)
                setTour(0)
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

    const nextStep = () => {
        setStep((prevPage) => {
          return prevPage + 1;
        });
      };

    const previousStep = () => {
        setStep((prevPage) => { return ( prevPage - 1 ) });
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

    const completeProgram = () => {
        patchCompletedProgram(user.user.uid, outcomeData)
        setCompletedProgram(true)
        setStep(0)
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
                nextStep,
                nextQuestion,
                step,
                onLogin,
                onRegister,
                setOnboardingData,
                onboardingData,
                previousStep,
                user,
                userLoading,
                setCurrentQuestion,
                signOut,
                setProviderId,
                expoPushToken,
                setError,
                setCompletedProgram,
                outcomeData,
                changeOutcomeEntry,
                completedProgram,
                completeProgram,
                educationProgram,
                setEducationProgram,
                lastDateOnApp,
                setLastDateOnApp,
                resetPassword,
                tour,
                setTour
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};