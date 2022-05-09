import React from "react";
import styled from "styled-components/native";

export const ProgressScreenWrapper = styled.View`
    flex: .5;
    flex-direction: row;
    justify-content: center;
`;

export const ProgressTrackWrapper = styled.View`
    flex: 1;
    align-items: flex-start;
    margin-left: 16px;
`;

export const ProgressTrackHeader = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
    margin-bottom: 34px;
    margin-left: -16px;
    align-self: center;
`;

export const EducationLineSegment = styled.View`
    border: #CBD7EB dashed;
    border-radius: 1px;
    height: 111px;
    margin-left: 16px;
`;

export const MovementLineSegment = styled.View`
    border: #CBD7EB dashed;
    border-radius: 1px;
    height: 63px;
    margin-left: 16px;
`;

export const ChapterSection = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ChapterText = styled.Text`
    position: absolute;
    left: 44px;
    font-family: Inter_500Medium;
    font-size: 16px;
`;

const ChapterCircleWrapper = styled.View`
    align-items: center;
    justify-content: center;
    border: 2px #CBD7EB;
    border-radius: 100px;
    height: 24px;
    width: 24px;
    margin-left: 5px;
`;

const ChapterCircleText = styled.Text`
    color: #CBD7EB;
    font-family: Inter_700Bold;
    font-size: 12px;
`;

export const ChapterCircle = ({ chapter }) => {
    return (
        <ChapterCircleWrapper>
            <ChapterCircleText>
                {chapter}
            </ChapterCircleText>
        </ChapterCircleWrapper>
    );
};