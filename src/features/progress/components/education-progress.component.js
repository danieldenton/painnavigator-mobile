import React, { useContext } from "react";
import { EducationContext } from "../../../services/education/education.context";
import { Selected } from "../../../icons";
import {
  CurrentChapterCircle,
  ChapterCircle,
  progressStyles,
} from "./progress.styles";
import { DottedLineSegement } from "../../../components/dotted-line-segment.component";
import { View, Text } from "react-native";
import { isAndroid } from "../../../utils";
import { educationChapterData } from "../data/chapter-data";

export const EducationProgress = () => {
  const { currentModule } = useContext(EducationContext);

  const dots = [...Array(isAndroid ? 8 : 9)].map((element, index) => {
    return <DottedLineSegement key={index} />;
  });


  const chapters = educationChapterData.map((chapter, idx) => {
    return (
      <>
        {currentModule > chapter.chapterComplete ? (
          <View key={idx}>
            <View style={progressStyles.educationChapterSection}>
              <Selected />
              <Text style={progressStyles.chapterText}>
                {chapter.chapterTitle}
              </Text>
            </View>
            {idx < 3 ? (
              <View style={progressStyles.educationLineSegmentCompleted} />
            ) : null}
          </View>
        ) : (
          <View key={idx}>
            <View style={progressStyles.educationChapterSection}>
              {idx === 0 || currentModule > educationChapterData[idx - 1].chapterComplete ? (
                <CurrentChapterCircle
                  chapter={chapter.chapter}
                  type={"education"}
                />
              ) : (
                <ChapterCircle chapter={chapter.chapter} />
              )}
              <Text style={progressStyles.chapterText}>
                {chapter.chapterTitle}
              </Text>
            </View>
            {idx < 3 ? (
            <View style={progressStyles.educationLineSegment}>{dots}</View>
            ) : null}
          </View>
        )}
      </>
    );
  });

  return (
    <View style={progressStyles.trackWrapper}>
      <Text style={progressStyles.trackHeader}>Education</Text>
     {chapters}
    </View>
  );
};
