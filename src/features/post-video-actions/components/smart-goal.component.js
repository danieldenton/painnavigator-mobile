import React from "react";
import { Wrapper, Header, BodyLine, Body, Bolded } from "./post-video-actions.styles";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";

export const SmartGoal = ({ navigation }) => {
    return (
        <>
            <Wrapper>
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
                    onPress={() => navigation.navigate("NewSmartGoal")}
                    title={"Let's do it!"} 
                />
            </ButtonSection>
        </>
    );
};