import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { isAndroid } from "../../../utils";

export const progressStyles = StyleSheet.create({
  screenWrapper: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
  },
  trackWrapper: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 16,
  },
  trackHeader: {
    fontFamily: "Inter_500Medium",
    fontSize: isAndroid ? 16 : 18,
    marginBottom: 16,
    marginLeft: -16,
    alignSelf: "center",
  },
  incompleteBridge: {
    position: "absolute",
    top: -110,
    left: 8,
    height: 116,
  },
  educationLineSegmentCompleted: {
    position: "absolute",
    top: -115,
    left: 15.5,
    borderWidth: 2,
    borderColor: "#16a28b",
    height: 116,
  },
  educationChapterSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 111
  },
  movementLineSegment: {
    position: "absolute",
    top: isAndroid ? -55 : -63,
    left: 8,
    height: isAndroid ? 45 : 63,
  },
  movementLineSegmentCompleted: {
    position: "absolute",
    top: isAndroid ? -55 : -63,
    left: 15.5,
    borderColor: "#4056f4",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    height: isAndroid ? 55 : 63,
    width: 2.5,
  },
  movementProgressLine: {
    position: "absolute",
    top: -63,
    left: 15,
    borderColor: "#4056f4",
    borderStyle: "solid",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    width: 2.5,
    zIndex: 1,
  },
  chapterSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: isAndroid ? 55 : 63,
  },
  chapterText: {
    position: "absolute",
    left: 44,
    fontFamily: "Inter_500Medium",
    fontSize: isAndroid ? 14 : 16,
  },
  moveOnQuestionWrapper: {
    padding: 1,
    flex: 0.08,
    alignItems: "center",
  },
  moveOnQuestion: {
    fontFamily: "Inter_500Medium",
    color: "#4056f4",
    fontSize: 15,
  },
});

const ChapterCircleWrapper = styled.View`
  align-items: center;
  justify-content: center;
  border: 2px #cbd7eb;
  border-radius: 100px;
  height: 24px;
  width: 24px;
  margin-left: 5px;
`;

const ChapterCircleText = styled.Text`
  color: #cbd7eb;
  font-family: Inter_700Bold;
  font-size: 12px;
`;

export const ChapterCircle = ({ chapter }) => {
  return (
    <ChapterCircleWrapper>
      <ChapterCircleText>{chapter}</ChapterCircleText>
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
  margin-left: 0.5px;
`;

const CurrentChapterText = styled.Text`
  font-family: Inter_700Bold;
  font-size: 16px;
`;

export const CurrentChapterCircle = ({ chapter, type }) => {
  return (
    <CurrentChapterCircleWrapper
      style={{ borderColor: type === "education" ? "#16A28B" : "#4056F4" }}
    >
      <CurrentChapterText
        style={{ color: type === "education" ? "#16A28B" : "#4056F4" }}
      >
        {chapter}
      </CurrentChapterText>
    </CurrentChapterCircleWrapper>
  );
};

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
  border: 2px #16a28b;
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
  border: #4056f4 solid;
  border-left-width: 2px;
  border-right-width: 2px;
  height: 63px;
  width: 2.5px;
`;

export const MoveOnQuestionWrapper = styled.View`
  padding: 1px;
  flex: 0.08;
  align-items: center;
`;

export const MoveOnQuestion = styled.Text`
  font-family: Inter_500Medium;
  color: #4056f4;
  font-size: 16px;
`;

export const MovementProgressLine = styled.View`
  position: absolute;
  top: -63px;
  left: 15px;
  border: #4056f4 solid;
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
