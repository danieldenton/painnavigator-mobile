import React from "react";
import { EducationUnit } from "../components/education-unit.component";
import { CompleteNotice } from "../components/complete-notice.component";

export const EducationUnitScreen = ({ route }) => {
    const { name, source, moduleComplete } = route.params;
    
    return (
        <>
            { !moduleComplete ? <EducationUnit name={name} source={source} /> : <CompleteNotice /> }
        </>
    );
};
