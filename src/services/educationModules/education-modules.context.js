import React, {useState, createContext } from "react";
import { educationModulePostRequestComplete } from "./education-modules.service";
import { educationModules } from "../../features/educationModules/data/education-module-data.json";

export const EducationModulesContext = createContext();

export const EducationModulesContextProvider = ({ children }) => {
    const [educationModuleProgress, setEducationModuleProgress] = useState(0);
    const nextEducationModule = educationModules[educationModuleProgress];

    const markComplete = (module_id) => {
        //educationModulePostRequestComplete(module_id);
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
