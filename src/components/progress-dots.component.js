import React from "react";
import styled from "styled-components/native";
import { ProgressDotFilled, ProgressDotUnfilled } from "../icons";

const ProgressDotsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ProgressDot = styled.View`
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 20px;
`;

export const ProgressDots = ({ progress, total }) => {
    const completedDots = [...Array(progress)].map((_, index) => <ProgressDot key={index}><ProgressDotFilled /></ProgressDot>);
    const remainingDots = [...Array(total - progress)].map((_, index) => <ProgressDot key={index}><ProgressDotUnfilled /></ProgressDot>);

    return(
        <ProgressDotsContainer>
            {completedDots}{remainingDots}
        </ProgressDotsContainer>
    );
};

export const SwiperDots = ({ progress, total }) => {
    const dots = [...Array(total)].map((_, index) => {
        const currentDot = progress === index + 1 ? true : false;

        return (
            <ProgressDot key={index}>
                {currentDot ? <ProgressDotFilled /> : <ProgressDotUnfilled />}
            </ProgressDot>
        );

    });

    return(
        <ProgressDotsContainer>
            {dots}
        </ProgressDotsContainer>
    );
};