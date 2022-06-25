import React, { useContext, useEffect, useState, createContext } from "react";
import { postEducationModule } from "./education.service";
import { educationModules } from "../../features/education/data/education-module-data.json";
import { ProfileContext } from "../profile/profile-context";
import { AuthenticationContext } from "../authentication/authentication.context";

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
        // postEducationModule(currentModule.id, "skipped");
        setSkippedEducationModules(prevSkipped => [...prevSkipped, currentModule.id]);
        setTimeout(() => { advanceProgress() }, 1000);
    };

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
                skipModule,
                skippedEducationModules
            }}
        >
            {children}
        </EducationContext.Provider>
    );
};