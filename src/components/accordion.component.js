import React from "react";
import styled from "styled-components/native";
import { List } from 'react-native-paper';
import { Scroll } from "./scroll.component";

const AccordionSection = styled(List.AccordionGroup)`
    padding: 0px;
`;

const BulletSection = styled.View`
    flex-direction: row; 
    align-items: flex-start;
    margin-right: 8px;
    margin-top: 16px;
`;

const Bullet = styled.View`
    border-radius: 100px;
    background-color: #16A28B;
    height: 6px;
    width: 6px;
    margin-right: 9px;
`;

const BulletTextSection = styled.View`
    margin-top: -11px;
`;

const BulletText = styled.Text`
    font-size: 16px;
    font-family: Inter_400Regular;
    line-height: 28px;
`;

export const Accordion = ({ steps }) => {

    const accordionSections = steps.map((step) => {
        const { id, title, titleNumberOfLines } = step; 

        const bullets = step.bullets.map((bullet) => {
        
            return (
                <BulletSection>     
                    <Bullet />
                    <BulletTextSection>
                        <BulletText>
                            {bullet}
                        </BulletText>
                    </BulletTextSection>
                </BulletSection>
            );
        });

        return (
            <List.Accordion 
                title={title} 
                titleStyle={{ margin: -8, fontSize: 22, color: "#16A28B", fontFamily: "Poppins_500Medium" }}
                titleNumberOfLines={titleNumberOfLines}
                id={id}
                style={{ padding: 0, marginTop: 16 }}
            >
                {bullets}
            </List.Accordion>
        );
    });


    return (
        <Scroll style={{ marginBottom: 120, marginTop: 32 }}>
            <AccordionSection>
                {accordionSections}
            </AccordionSection>
        </Scroll>
    );
};