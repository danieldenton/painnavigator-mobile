import React, {useState, createContext } from "react";
import { postEducationModule } from "./education.service";
import { educationModules } from "../../features/education/data/education-module-data.json";

export const EducationModulesContext = createContext();

export const EducationModulesContextProvider = ({ children }) => {
    const [educationModuleProgress, setEducationModuleProgress] = useState(0);
    const nextEducationModule = educationModules[educationModuleProgress];

    const markComplete = (module_id) => {
        //postEducationModule(module_id);
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
