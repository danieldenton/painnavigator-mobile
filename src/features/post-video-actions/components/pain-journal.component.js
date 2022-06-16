import React from "react";
import { Wrapper, Header, Body } from "./post-video-actions.styles";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";

export const PainJournal = ({ navigation }) => {
    return (
        <>
            <Wrapper>
                <Header>Why keep a pain journal?</Header>
                <Body>
                    A Pain Journal is one of the most effective ways 
                    to understand your pain and the impact it has on your life.
                </Body>
                <Body style={{ marginTop: 16 }}>
                    Using a Pain Journal consistently will allow you to better 
                    communicate your pain, identify your pain triggers and 
                    ultimately be able to better control your pain. 
                    Any time your pain increases to a level that interferes with your daily life, 
                    use your Pain Journal! 
                </Body>
            </Wrapper>
            <ButtonSection>
                <ModuleButton
                    onPress={() => navigation.navigate("PainJournal")}
                    title={"Let's get started!"} 
                />
            </ButtonSection>
        </>
    );
};