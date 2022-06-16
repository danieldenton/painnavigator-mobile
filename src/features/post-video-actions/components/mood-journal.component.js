import React from "react";
import { Wrapper, Header, Body } from "./post-video-actions.styles";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";

export const MoodJournal = ({ navigation }) => {
    return (
        <>
            <Wrapper>
                <Header>Why keep a mood journal?</Header>
                <Body>
                    A Mood Journal allows you to reflect on the situation 
                    and thoughts that caused a change in your mood. 
                </Body>
                <Body style={{ marginTop: 16 }}>
                    These changes in mood have a direct impact on your pain and how well 
                    you can manage it. Using a Mood Journal will increase your awareness 
                    of negative thoughts and help you work through the vicious cycle of pain 
                    by monitoring your thoughts and feelings.
                </Body>
            </Wrapper>
            <ButtonSection>
                <ModuleButton
                    onPress={() => navigation.navigate("MoodJournal")}
                    title={"Let's get started!"} 
                />
            </ButtonSection>
        </>
    );
};