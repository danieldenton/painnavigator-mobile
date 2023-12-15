import React, { useContext } from "react";
import { View, Text } from "react-native";
import { MovementContext } from "../../../services/movement/movement.context";
import { PurpleCheckMark } from "../../../icons";
import { CurrentChapterCircle, ChapterCircle } from "./progress.styles";
import { DottedLineSegement } from "../../../components/dotted-line-segment.component";
import { progressStyles } from "./progress.styles";
import { movementChapterData } from "../data/chapter-data";

export const MovementProgress = () => {
  const { movementProgress } = useContext(MovementContext);

  const dots = [...Array(4)].map((_, index) => {
    return <DottedLineSegement key={index} />;
  });

  

  const chapters = movementChapterData.map((chapter, idx) => {
    return (
      <>
        {movementProgress > chapter.chapterComplete ? (
          <View>
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
              {idx === 0 || movementProgress > movementChapterData[idx - 1].chapterComplete ? (
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
