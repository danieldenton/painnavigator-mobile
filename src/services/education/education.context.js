import React, { useEffect, useState, createContext } from "react";
import { postEducationModule } from "./education.service";
import { educationModules } from "../../features/education/data/education-module-data.json";

export const EducationContext = createContext();

export const EducationContextProvider = ({ children }) => {
    const [educationProgress, setEducationProgress] = useState(0);
    const [currentModule, setCurrentModule] = useState(educationModules[educationProgress]);

    useEffect(() => {
        setCurrentModule(educationModules[educationProgress]);
    }, [educationProgress])

    const completeModule = () => {
        //postEducationModule(module_id);
        setEducationProgress((prevEducationProgress) => { return ( prevEducationProgress + 1 ) });
    };

    const resetModule = () => {
        setTimeout(() => setModuleComplete(false), 1000);
    };

    return (
        <EducationContext.Provider
            value={{
                currentModule,
                completeModule,
                resetModule
            }}
        >
            {children}
        </EducationContext.Provider>
    );
};
