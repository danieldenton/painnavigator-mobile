import React from "react";
import { Wrapper, Header, Body } from "./post-video-actions.styles";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";

export const FoodJournal = ({ navigation }) => {
    return (
        <>
            <Wrapper>
                <Header>Why keep a food journal?</Header>
                <Body>
                    A food journal is a useful tool to track what you're 
                    eating and understand why certain triggers 
                    (like stress and pain) affect our food choices. 
                </Body>
                <Body>
                    Food journals are the #1 recommended strategy for weight 
                    loss by most nutritionists. People who use a food journal 
                    lose twice as much weight as those who don't, and 70% of 
                    food journalers lose enough weight to lower their health risks!
                </Body>
                <Body>
                    So it may seem like a lot of work, 
                    but stick with it. Your body will thank you!
                </Body>
            </Wrapper>
            <ButtonSection>
                <ModuleButton
                    onPress={() => navigation.navigate("NewFoodJournal", {
                        type: "post_video_action"
                    })}
                    title={"Let's get started!"} 
                />
            </ButtonSection>
        </>
    );
};