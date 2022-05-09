import React, { useContext } from "react";
import { Accordion } from "../../../components/accordion.component";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitInfo } from "./education-unit-info.component";

export const TextUnit = () => {
    const { currentModule } = useContext(EducationContext);
    const { id, name, summary, steps } = currentModule;

    return (
        <>
            <EducationUnitInfo id={id} name={name} summary={summary} />
            <Accordion steps={steps} />
        </>
    );
};