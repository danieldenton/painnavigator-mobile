import React, { useContext, useEffect, useState, createContext } from "react";
import { postEducationModule } from "./education.service";
import { educationModules } from "../../features/education/data/education-module-data.json";
import { AuthenticationContext } from "../authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const EducationContext = createContext();

export const EducationContextProvider = ({ children }) => {
    const [educationProgress, setEducationProgress] = useState(1);
    const [currentModule, setCurrentModule] = useState({});
    const [completedEducationModules, setCompletedEducationModules] = useState([]);
    const [skippedEducationModules, setSkippedEducationModules] = useState([]);
    const [lastCompletedModule, setLastCompletedModule] = useState(null);
    const { user } = useContext(AuthenticationContext);

    useEffect(() => {
        const module = educationModules.find(module => module.id === educationProgress);
        setCurrentModule(module);
    }, [educationProgress])

    const advanceProgress = () => {
        setEducationProgress((prevEducationProgress) => { return ( prevEducationProgress + 1 ) });
    };

    const completeModule = () => {
        const module = {
            module_id: currentModule.id,
            status: 0        
        };
        postEducationModule(module, setLastCompletedModule, user.user.uid);
        setCompletedEducationModules(prevCompleted => [...prevCompleted, currentModule.id]);
        setTimeout(() => { advanceProgress() }, 1000);
    };

    const completeSkippedUnit = (unitId) => {
        const newCompletedModules = [...completedEducationModules, unitId];
        const sortedData = newCompletedModules.sort(function(a, b){return a-b});
        setCompletedEducationModules(sortedData);
        setSkippedEducationModules(prevSkipped => prevSkipped.filter(unit => unit !== unitId));
    };

    //const setOrientation = () => {
        //if (Dimensions.get('window').height > Dimensions.get('window').width) {
            //Device is in portrait mode, rotate to landscape mode.
            //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
        //}
        //else {
            //Device is in landscape mode, rotate to portrait mode.
            //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        //}
    //};

    const skipModule = () => {
        const module = {
            module_id: currentModule.id,
            status: 1       
        };
        postEducationModule(module, setLastCompletedModule, user.user.uid);
        if(!skippedEducationModules.includes(currentModule.id)){
            setSkippedEducationModules(prevSkipped => [...prevSkipped, currentModule.id]);
        };
        setTimeout(() => { advanceProgress() }, 1000);
    };

    const saveEducationProgress = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@education_progress", jsonValue);
        } catch (e) {
            console.log("error storing education_progress", e);
        }
    };

    const loadEducationProgress = async () => {
        try {
            const value = await AsyncStorage.getItem("@education_progress");
            if (value !== null) {
                setEducationProgress(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading education_progress", e);
        }
    };

    useEffect(() => {
        loadEducationProgress();
    }, []);

    useEffect(() => {
        saveEducationProgress(educationProgress);
    }, [educationProgress]);

    const saveCompletedEducationModules = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@completed_education_modules", jsonValue);
        } catch (e) {
            console.log("error storing completed_education_modules", e);
        }
    };

    const loadCompletedEducationModules = async () => {
        try {
            const value = await AsyncStorage.getItem("@completed_education_modules");
            if (value !== null) {
                setCompletedEducationModules(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading completed_education_modules", e);
        }
    };

    useEffect(() => {
        loadCompletedEducationModules();
    }, []);

    useEffect(() => {
        saveCompletedEducationModules(completedEducationModules);
    }, [completedEducationModules]);

    const saveSkippedEducationModules = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@skipped_education_modules", jsonValue);
        } catch (e) {
            console.log("error storing skipped_education_modules", e);
        }
    };

    const loadSkippedEdcuationModules = async () => {
        try {
            const value = await AsyncStorage.getItem("@skipped_education_modules");
            if (value !== null) {
                setSkippedEducationModules(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading skipped_education_modules", e);
        }
    };

    useEffect(() => {
        loadSkippedEdcuationModules();
    }, []);

    useEffect(() => {
        saveSkippedEducationModules(skippedEducationModules);
    }, [skippedEducationModules]);

    return (
        <EducationContext.Provider 
            value={{ 
                currentModule, 
                completeModule,
                completedEducationModules,
                completeSkippedUnit,
                educationProgress,
                lastCompletedModule,
                setEducationProgress,
                setLastCompletedModule,
                skipModule,
                skippedEducationModules
            }}
        >
            {children}
        </EducationContext.Provider>
    );
};