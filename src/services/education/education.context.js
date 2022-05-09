import React, { useEffect, useState, createContext } from "react";
import { postEducationModule } from "./education.service";
import { educationModules } from "../../features/education/data/education-module-data.json";

export const EducationContext = createContext();

export const EducationContextProvider = ({ children }) => {
    const [educationProgress, setEducationProgress] = useState(0);
    const [currentModule, setCurrentModule] = useState(educationModules[educationProgress]);
    const [completedEducationModules, setCompletedEducationModules] = useState([]);
    const [skippedEducationModules, setSkippedEducationModules] = useState([]);

    useEffect(() => {
        setCurrentModule(educationModules[educationProgress]);
    }, [educationProgress])

    const advanceProgress = () => {
        setEducationProgress((prevEducationProgress) => { return ( prevEducationProgress + 1 ) });
    };

    const completeModule = () => {
        // postEducationModule(currentModule.id, "complete");
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
                skipModule,
                skippedEducationModules
            }}
        >
            {children}
        </EducationContext.Provider>
    );
};
