import React from "react";
import { Wrapper, Header, Body } from "./post-video-actions.styles";
import { GraphGraphic } from "../../../graphics"

export const DailyPainScores = () => {
    return (
        <>
            <Wrapper>
                <GraphGraphic />
                <Header>Daily Pain Scores</Header>
                <Body>
                Keep track of your progress by logging your pain score daily!
                </Body>
            </Wrapper>
        </>
    );
};