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
    margin-top: 16px;
`;

export const ProgressDots = ({ progress, total }) => {
    const completedDots = [...Array(progress)].map((elem, index) => <ProgressDot key={index}><ProgressDotFilled /></ProgressDot>);
    const remainingDots = [...Array(total - progress)].map((elem, index) => <ProgressDot key={index}><ProgressDotUnfilled /></ProgressDot>);

    return(
        <ProgressDotsContainer>
            {completedDots}{remainingDots}
        </ProgressDotsContainer>
    );
};