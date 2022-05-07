import React, { useContext } from "react";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitInfo } from "./education-unit-info.component";
import { ScrollView, View, Text } from "react-native";
import { Scroll } from "../../../components/scroll.component";
import { List } from 'react-native-paper';

export const TextUnit = () => {
    const { currentModule } = useContext(EducationContext);
    const { id, name, summary, steps } = currentModule;

    const accordionSections = steps.map((step) => {
        const bullets = step.bullets.map(bullet => <Text>{bullet}</Text>);

        return (
            <List.AccordionGroup>
                <List.Accordion title={step.header} id={step.id}>
                    {bullets}
                </List.Accordion>
            </List.AccordionGroup>
        );
    })

    return (
        <>
            <EducationUnitInfo id={id} name={name} summary={summary} />
            <ScrollView>
                {accordionSections}
            </ScrollView>
        </>
    );
};