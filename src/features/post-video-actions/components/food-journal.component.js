import React from "react";
import { Wrapper, Header, Body, GraphicWrapper } from "./post-video-actions.styles";
import { FoodGraphic } from "../../../graphics";
import { View } from "react-native";

export const FoodJournal = () => {
    return (
        <View style={{ marginBottom: 80 }}>
            <GraphicWrapper>
                <FoodGraphic />
            </GraphicWrapper>
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
        </View>
    );
};