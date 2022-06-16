import React from "react";
import { Wrapper, Header, BodyLine, Body, Bolded, GraphicWrapper } from "./post-video-actions.styles";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";
import { GoalGraphic } from "../../../graphics";

export const SmartGoal = ({ navigation }) => {
    return (
        <>
            <Wrapper>
                <GraphicWrapper style={{ marginRight: 32 }}>
                    <GoalGraphic />
                </GraphicWrapper>
                <Header>Let’s Make Your SMART Goal!</Header>
                <Body>Remember, SMART goals are:</Body>
                <BodyLine>
                    <Bolded>S</Bolded><Body>pecific</Body>
                </BodyLine>
                <BodyLine>
                    <Bolded>M</Bolded><Body>easurable</Body>
                </BodyLine>
                <BodyLine>
                    <Bolded>A</Bolded><Body>chievable</Body>
                </BodyLine>
                <BodyLine>
                    <Bolded>R</Bolded><Body>elevant</Body>
                </BodyLine>
                <BodyLine>
                    <Bolded>T</Bolded><Body>ime-based</Body>
                </BodyLine>
            </Wrapper>
            <ButtonSection>
                <ModuleButton
                    onPress={() => navigation.navigate("SmartGoal")}
                    title={"Let's do it!"} 
                />
            </ButtonSection>
        </>
    );
};