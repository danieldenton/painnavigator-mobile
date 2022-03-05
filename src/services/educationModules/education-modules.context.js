import React, {useState, useEffect, createContext, useContext } from "react";
import { educationModules } from "../../features/educationModules/data/education-module-data.json";

export const EducationModulesContext = createContext();

export const EducationModulesContextProvider = ({ children }) => {
    const [educationModuleProgress, setEducationModuleProgress] = useState(0);
    const nextEducationModule = educationModules[educationModuleProgress];

    const markComplete = () => {
        setEducationModuleProgress((prevEducationModuleProgress) => { return ( prevEducationModuleProgress + 1 ) });
    };

    return (
        <EducationModulesContext.Provider
            value={{
                nextEducationModule,
                markComplete,
            }}
        >
            {children}
        </EducationModulesContext.Provider>
    );
};
