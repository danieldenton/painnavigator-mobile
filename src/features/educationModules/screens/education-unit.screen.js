import React, { useState, useEffect } from "react";
import { EducationUnit } from "../components/education-unit.component";
import { CompleteNotice } from "../components/complete-notice.component";

export const EducationUnitScreen = ({ route }) => {
    const { name, source } = route.params;
    const [moduleComplete, setModuleComplete] = useState(false);
    
    return (
        <>
            { !moduleComplete ? <EducationUnit name={name} source={source} setModuleComplete={setModuleComplete} /> : <CompleteNotice /> }
        </>
    );
};
