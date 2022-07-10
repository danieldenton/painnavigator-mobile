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
                <Body style={{ marginTop: 0 }}>Remember, SMART goals are:</Body>
                <BodyLine>
                    <Bolded>S</Bolded><Body style={{ marginTop: 0 }}>pecific</Body>
                </BodyLine>
                <BodyLine>
                    <Bolded>M</Bolded><Body style={{ marginTop: 0 }}>easurable</Body>
                </BodyLine>
                <BodyLine>
                    <Bolded>A</Bolded><Body style={{ marginTop: 0 }}>chievable</Body>
                </BodyLine>
                <BodyLine>
                    <Bolded>R</Bolded><Body style={{ marginTop: 0 }}>ealistic</Body>
                </BodyLine>
                <BodyLine>
                    <Bolded>T</Bolded><Body style={{ marginTop: 0 }}>ime-based</Body>
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