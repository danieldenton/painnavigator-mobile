import React, { useState, useEffect } from "react";
import { EducationUnit } from "../components/education-unit.component";
import { CompleteNotice } from "../components/complete-notice.component";

export const EducationUnitScreen = ({ route }) => {
    const { id, name, source, navigation } = route.params;
    const [moduleComplete, setModuleComplete] = useState(false);
    
    return (
        <>
            { !moduleComplete ? (
                <EducationUnit 
                    name={name} 
                    source={source}
                    module_id={id} 
                    setModuleComplete={setModuleComplete} 
                />
                ) : (
                <CompleteNotice 
                    navigation={navigation}
                /> 
            )}
        </>
    );
};
