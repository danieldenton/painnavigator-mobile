import React, { useState, createContext, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { loginRequest, postUser } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(null);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

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
                postUser(u.user.uid, name);
                setIsLoading(false);
                console.log(JSON.stringify(u.user.uid));
            }).catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
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