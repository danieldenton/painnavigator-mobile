import React from "react";
import styled from "styled-components/native";

export const ProgressScreenWrapper = styled.View`
    flex: .8;
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
    margin-bottom: 16px;
    margin-left: -16px;
    align-self: center;
`;

export const IncompleteBridge = styled.View`
    position: absolute;
    top: -110px;
    left: 8px;
    height: 116px;
`;

export const EducationLineSegmentCompleted = styled.View`
    position: absolute;
    top: -115px;
    left: 15.5px;
    border: 2px #16A28B;
    height: 116px;
`;

export const MovementLineSegment = styled.View`
    position: absolute;
    top: -63px;
    left: 8px;
    height: 63px;
`;

export const MovementLineSegmentCompleted = styled.View`
    position: absolute;
    top: -63px;
    left: 15.5px;
    border: #4056F4 solid;
    border-left-width: 2px;
    border-right-width: 2px;
    height: 63px;
    width: 2.5px;
`;

export const MoveOnQuestionWrapper = styled.View`
padding: 1px;
flex: .08;
align-items: center
`

export const MoveOnQuestion = styled.Text`
font-family: Inter_500Medium;
color: #4056F4;
font-size: 16px;
`

export const MovementProgressLine = styled.View`
    position: absolute;
    top: -63px;
    left: 15px;
    border: #4056F4 solid;
    border-left-width: 2px;
    border-right-width: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 2.5px;
    z-index: 1;
`;

export const ChapterSection = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 63px;
`;

export const EducationChapterSection = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 111px;
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

const CurrentChapterCircleWrapper = styled.View`
    align-items: center;
    justify-content: center;
    border: 3px;
    border-radius: 100px;
    height: 33px;
    width: 33px;
    margin-left: .5px;
`;

const CurrentChapterText = styled.Text`
    font-family: Inter_700Bold;
    font-size: 16px;
`;

export const CurrentChapterCircle = ({ chapter, type }) => {
    return (
        <CurrentChapterCircleWrapper style={{ borderColor: type === "education" ? "#16A28B" : "#4056F4" }}>
            <CurrentChapterText style={{ color: type === "education" ? "#16A28B" : "#4056F4" }}>
                {chapter}
            </CurrentChapterText>
        </CurrentChapterCircleWrapper>
    );
};