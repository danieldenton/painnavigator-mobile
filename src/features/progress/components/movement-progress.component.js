import React, { useContext } from "react";
import { View, Text } from "react-native";
import { MovementContext } from "../../../services/movement/movement.context";
import { PurpleCheckMark } from "../../../icons";
import { CurrentChapterCircle, ChapterCircle } from "./progress.styles";
import { DottedLineSegement } from "../../../components/dotted-line-segment.component";
import { progressStyles } from "./progress.styles";

export const MovementProgress = () => {
  const { movementProgress } = useContext(MovementContext);

  const dots = [...Array(4)].map((_, index) => {
    return <DottedLineSegement key={index} />;
  });

  const chapterData = [
    {
      chapter: 1,
      chapterTitle: "Foundations",
      chapterComplete: 5,
    },
    {
      chapter: 2,
      chapterTitle: "Progressing",
      chapterComplete: 11,
    },
    {
      chapter: 3,
      chapterTitle: "Strength",
      chapterComplete: 17,
    },
    {
      chapter: 4,
      chapterTitle: "Endurance",
      chapterComplete: 23,
    },
    {
      chapter: 5,
      chapterTitle: "Core",
      chapterComplete: 29,
    },
    {
      chapter: 6,
      chapterTitle: "Mastering",
      chapterComplete: 35,
    },
  ];

  const chapters = chapterData.map((chapter, idx) => {
    return (
      <>
        {movementProgress > chapter.chapterComplete ? (
          <View key={idx}>
            <View style={progressStyles.movementChapterSection}>
              <PurpleCheckMark />
              <Text style={progressStyles.chapterText}>
                {chapter.chapterTitle}
              </Text>
            </View>
            {idx < 5 ? (
              <View style={progressStyles.movementLineSegmentCompleted} />
            ) : null}
          </View>
        ) : (
          <View>
            <View style={progressStyles.movementChapterSection}>
              {idx === 0 || movementProgress > chapterData[idx - 1].chapterComplete ? (
                <CurrentChapterCircle
                  chapter={chapter.chapter}
                  type={"movement"}
                />
              ) : (
                <ChapterCircle chapter={chapter.chapter} />
              )}
              <Text style={progressStyles.chapterText}>
                {chapter.chapterTitle}
              </Text>
            </View>
            {idx < 5 ? (
            <View style={progressStyles.movementLineSegment}>{dots}</View>
            ) : null}
          </View>
        )}
      </>
    );
  });

  return (
    <View style={progressStyles.trackWrapper}>
      <Text style={progressStyles.trackHeader}>Movement</Text>
      {chapters}
    </View>
  );
};
