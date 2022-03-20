import React, {useState, createContext } from "react";
import { postEducationModule } from "./education.service";
import { educationModules } from "../../features/education/data/education-module-data.json";

export const EducationContext = createContext();

export const EducationContextProvider = ({ children }) => {
    const [educationProgress, setEducationProgress] = useState(0);
    const nextEducationModule = educationModules[educationProgress];

    const markComplete = (module_id) => {
        //postEducationModule(module_id);
        setEducationProgress((prevEducationProgress) => { return ( prevEducationProgress + 1 ) });
    };

    return (
        <EducationContext.Provider
            value={{
                nextEducationModule,
                markComplete,
            }}
        >
            {children}
        </EducationContext.Provider>
    );
};
