import React, { useState, useContext } from "react";
import { EducationUnit } from "../components/education-unit.component";
import { CompletionScreen } from "../components/completion-screen.component";
import { EducationContext } from "../../../services/education/education.context";

export const EducationUnitScreen = ({ route }) => {
    const { id, name, source, navigation } = route.params;
    const { moduleComplete } = useContext(EducationContext);
    
    return (
        <>
            { !moduleComplete ? (
                <EducationUnit 
                    name={name} 
                    source={source}
                    module_id={id} 
                />
                ) : (
                <CompletionScreen 
                    navigation={navigation}
                /> 
            )}
        </>
    );
};
