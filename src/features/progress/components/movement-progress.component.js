import React, { useContext } from "react";
import { View, Text } from "react-native";
import { MovementContext } from "../../../services/movement/movement.context";
import { PurpleCheckMark } from "../../../icons";
import { CurrentChapterCircle, ChapterCircle } from "./progress.styles";
import { DottedLineSegement } from "../../../components/dotted-line-segment.component";
import { progressStyles } from "./progress.styles";

export const MovementProgress = () => {
  const { movementProgress } = useContext(MovementContext);

  const dots = [...Array(5)].map((element, index) => {
    return <DottedLineSegement key={index} />;
  });

  return (
    <View style={progressStyles.trackWrapper}>
      <Text style={progressStyles.trackHeader}>Movement</Text>
      <View style={progressStyles.chapterSection}>
        {movementProgress > 5 ? (
          <PurpleCheckMark />
        ) : (
          <CurrentChapterCircle chapter={1} type={"movement"} />
        )}
        <Text style={progressStyles.chapterText}>Foundations</Text>
      </View>
      <View>
        {movementProgress > 5 ? (
          <View style={progressStyles.movementLineSegmentCompleted} />
        ) : (
          <View style={progressStyles.movementLineSegment}>{dots}</View>
        )}
      </View>
      <View style={progressStyles.chapterSection}>
        {movementProgress > 11 ? (
          <PurpleCheckMark />
        ) : movementProgress > 5 ? (
          <CurrentChapterCircle chapter={2} type={"movement"} />
        ) : (
          <ChapterCircle chapter={2} />
        )}
        <Text style={progressStyles.chapterText}>Progressing</Text>
      </View>
      <View>
        {movementProgress > 11 ? (
          <View style={progressStyles.movementLineSegmentCompleted} />
        ) : (
          <View style={progressStyles.movementLineSegment}>{dots}</View>
        )}
      </View>
      <View style={progressStyles.chapterSection}>
        {movementProgress > 17 ? (
          <PurpleCheckMark />
        ) : movementProgress > 11 ? (
          <CurrentChapterCircle chapter={3} type={"movement"} />
        ) : (
          <ChapterCircle chapter={3} />
        )}
        <Text style={progressStyles.chapterText}>Strength</Text>
      </View>
      <View>
        {movementProgress > 17 ? (
          <View style={progressStyles.movementLineSegmentCompleted} />
        ) : (
          <View style={progressStyles.movementLineSegment}>{dots}</View>
        )}
      </View>
      <View style={progressStyles.chapterSection}>
        {movementProgress > 23 ? (
          <PurpleCheckMark />
        ) : movementProgress > 17 ? (
          <CurrentChapterCircle chapter={4} type={"movement"} />
        ) : (
          <ChapterCircle chapter={4} />
        )}
        <Text style={progressStyles.chapterText}>Endurance</Text>
      </View>
      <View>
        {movementProgress > 23 ? (
          <View style={progressStyles.movementLineSegmentCompleted} />
        ) : (
          <View style={progressStyles.movementLineSegment}>{dots}</View>
        )}
      </View>
      <View style={progressStyles.chapterSection}>
        {movementProgress > 29 ? (
          <PurpleCheckMark />
        ) : movementProgress > 23 ? (
          <CurrentChapterCircle chapter={5} type={"movement"} />
        ) : (
          <ChapterCircle chapter={5} />
        )}
        <Text style={progressStyles.chapterText}>Core</Text>
      </View>
      <View>
        {movementProgress > 29 ? (
          <View style={progressStyles.movementLineSegmentCompleted} />
        ) : (
          <View style={progressStyles.movementLineSegment}>{dots}</View>
        )}
      </View>
      <View style={progressStyles.chapterSection}>
        {movementProgress > 35 ? (
          <PurpleCheckMark />
        ) : movementProgress > 29 ? (
          <CurrentChapterCircle chapter={6} type={"movement"} />
        ) : (
          <ChapterCircle chapter={6} />
        )}
        <Text style={progressStyles.chapterText}>Mastering</Text>
      </View>
    </View>
  );
};
