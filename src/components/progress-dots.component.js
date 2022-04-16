import React from "react";
import styled from "styled-components/native";

const ProgressDotsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ProgressDot = styled.View`
    border-radius: 100px;
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 17px;
    margin-bottom: 20px;
    padding: 4px;
`;

export const ProgressDots = ({ progress, total }) => {
    const completedDots = [...Array(progress)].map((elem, index) => <ProgressDot key={index} style={{ backgroundColor: `hsl(210, 25%, 17%)` }} />);
    const remainingDots = [...Array(total - progress)].map((elem, index) => <ProgressDot key={index} style={{ backgroundColor: `hsl(210, 10%, 80%)` }} />);

    return(
        <ProgressDotsContainer>
            {completedDots}{remainingDots}
        </ProgressDotsContainer>
    );
};