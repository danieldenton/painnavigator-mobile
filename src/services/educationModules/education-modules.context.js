import React, {useState, useEffect, createContext, useContext } from "react";
import { educationModules } from "../../features/educationModules/data/education-module-data.json";

export const EducationModulesContext = createContext();

export const EducationModulesContextProvider = ({ children }) => {
    const [educationModuleProgress, setEducationModuleProgress] = useState(0);
    const nextEducationModule = educationModules[educationModuleProgress];

    return (
        <EducationModulesContext.Provider
            value={{
                nextEducationModule: nextEducationModule,
            }}
        >
            {children}
        </EducationModulesContext.Provider>
    )
}
