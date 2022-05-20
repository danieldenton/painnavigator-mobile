import React, { useState } from "react";
import { Next } from "../../icons";
import { View } from "react-native";
import { 
    AccordionPressableSection, 
    AccordionContent,
    AccordionTitleSection, 
    AccordionTitle, 
    AccordionIconSection,
    Rotated 
} from "./accordion.styles";
import { BulletList } from "./bullet-list.component";

export const Accordion = ({ bullets, options, unitsIcon, title }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <AccordionPressableSection 
                onPress={() => setExpanded(prevExpanded => !prevExpanded)}
            >
                <AccordionTitleSection>
                    <AccordionTitle>{title}</AccordionTitle>
                </AccordionTitleSection>
                <AccordionIconSection>
                    {unitsIcon}  
                    {expanded ? 
                        <Rotated style={{ marginLeft: 22 }}>
                            <Next />                         
                        </Rotated>   
                        :  
                        <View style={{ marginLeft: 22 }}>
                            <Next />                         
                        </View>
                    }
                </AccordionIconSection>
            </AccordionPressableSection>
            {expanded && <AccordionContent>
                {bullets && <BulletList bullets={bullets} />}
            </AccordionContent>}  
        </>   
    );
};