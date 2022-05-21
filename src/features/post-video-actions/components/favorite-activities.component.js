import React from "react";
import { Wrapper, Header, Body } from "./post-video-actions.styles";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";

export const FavoriteActivities = ({ navigation }) => {
    return (
        <>
            <Wrapper>
                <Header>Why keep track of your favorite activities?</Header>
                <Body>
                    It's common to avoid activities because you are afraid of making the pain worse. 
                </Body>
                <Body>
                    Use My Activities to track activities that you used to enjoy doing 
                    or want to try. Getting started with activities you enjoy will allow 
                    you to interrupt the vicious cycle of pain and overcome avoidance. 
                    At the end of this activity, you will have  a list of activities 
                    that you can do and would look forward to doing to continue to build into your life!
                </Body>
            </Wrapper>
            <ButtonSection>
                <ModuleButton
                    onPress={() => navigation.navigate("UpdateFavoriteActivities")}
                    title={"Let's get started!"} 
                />
            </ButtonSection>
        </>
    );
};