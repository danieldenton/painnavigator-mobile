import React, {useState, createContext } from "react";
import { postEducationModule } from "./education.service";
import { educationModules } from "../../features/education/data/education-module-data.json";

export const EducationContext = createContext();

export const EducationContextProvider = ({ children }) => {
    const [moduleComplete, setModuleComplete] = useState(false);
    const [educationProgress, setEducationProgress] = useState(0);
    const nextEducationModule = educationModules[educationProgress];

    const markComplete = (module_id) => {
        //postEducationModule(module_id);
        setEducationProgress((prevEducationProgress) => { return ( prevEducationProgress + 1 ) });
        setModuleComplete(true);
    };

    return (
        <EducationContext.Provider
            value={{
                moduleComplete,
                nextEducationModule,
                markComplete
            }}
        >
            {children}
        </EducationContext.Provider>
    );
};
