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
    marginBottom: 111,
  },
  movementLineSegment: {
    position: "absolute",
    top: -52,
    left: 8,
    height: isAndroid ? 45 : 55,
  },
  movementLineSegmentCompleted: {
    position: "absolute",
    top: -55,
    left: 15.5,
    borderColor: "#4056f4",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    height: 55,
    width: 2.5,
  },
  movementChapterSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: isAndroid ? 54 : 55,
  },
  chapterCompleteSection: {
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
  height: 33px;
  width: 33px;
  margin-left: 0.5px;
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