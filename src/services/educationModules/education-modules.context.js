import React, {useState, useEffect, createContext, useContext } from "react";
import { educationModules } from "../../features/educationModules/data/education-module-data.json";

export const EducationModulesContext = createContext();

export const EducationModulesContextProvider = ({ children }) => {
    const [educationModuleProgress, setEducationModuleProgress] = useState(0);
    const [moduleComplete, setModuleComplete] = useState(false);
    const nextEducationModule = educationModules[educationModuleProgress];

    const markComplete = () => {
        //setEducationModuleProgress((prevEducationModuleProgress) => { return ( prevEducationModuleProgress + 1 ) });
        setModuleComplete(true);
    };

    return (
        <EducationModulesContext.Provider
            value={{
                nextEducationModule,
                moduleComplete,
                markComplete,
            }}
        >
            {children}
        </EducationModulesContext.Provider>
    );
};
