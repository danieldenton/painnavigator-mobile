import React from "react";
import { PainScoreWrapper, PainGraphWrapper, PainScoreHeader, PainScoreBody } from "./post-video-actions.styles";
import { GraphGraphic } from "../../../graphics"

export const DailyPainScores = () => {
    return (
        <>
            <PainScoreWrapper>
                <PainScoreHeader>Daily Pain Scores</PainScoreHeader>
                <PainGraphWrapper>
                    <GraphGraphic />
                </PainGraphWrapper>
                <PainScoreBody>
                    Keep track of your progress by logging your pain score daily!
                </PainScoreBody>
            </PainScoreWrapper>
        </>
    );
};