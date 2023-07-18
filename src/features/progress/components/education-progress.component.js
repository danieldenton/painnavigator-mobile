import React, { useContext } from "react";
import { EducationContext } from "../../../services/education/education.context";
import { Selected } from "../../../icons";
import { 
    ProgressTrackWrapper, 
    ProgressTrackHeader, 
    CurrentChapterCircle,
    ChapterCircle,
    EducationChapterSection, 
    ChapterText, 
    EducationLineSegmentCompleted,
    IncompleteBridge
} from "./progress.styles";
import { DottedLineSegement } from "../../../components/dotted-line-segment.component";
import { View } from "react-native";

export const EducationProgress = () => {
    const { currentModule } = useContext(EducationContext);

    const dots = [...Array(9)].map((element, index) => {
        return (
            <DottedLineSegement key={index} />
        );
    });

    return (
        <ProgressTrackWrapper>
            <ProgressTrackHeader>Education</ProgressTrackHeader>
            <EducationChapterSection>
                {currentModule.id > 9 ? <Selected /> : <CurrentChapterCircle chapter={1} type={"education"} />}
                <ChapterText>Introduction</ChapterText>
            </EducationChapterSection>
            <View>
                {currentModule.id > 9 ? <EducationLineSegmentCompleted /> : <IncompleteBridge>{dots}</IncompleteBridge>}
            </View>
            <EducationChapterSection>
                {currentModule.id > 21 ? <Selected /> : currentModule.id > 9 ? <CurrentChapterCircle chapter={2} type={"education"} /> : <ChapterCircle chapter={2} />}
                <ChapterText>Influences</ChapterText>
            </EducationChapterSection>
            <View>
                {currentModule.id > 21 ? <EducationLineSegmentCompleted /> : <IncompleteBridge>{dots}</IncompleteBridge>}
            </View>
            <EducationChapterSection>
                {currentModule.id > 38 ? <Selected /> : currentModule.id > 21 ? <CurrentChapterCircle chapter={3} type={"education"}/> : <ChapterCircle chapter={3} />}
                <ChapterText>Strategies</ChapterText>
            </EducationChapterSection>
            <View>
                {currentModule.id > 38 ? <EducationLineSegmentCompleted /> : <IncompleteBridge>{dots}</IncompleteBridge>}
            </View>
            <EducationChapterSection>
                {currentModule.id > 61 ? <Selected /> : currentModule.id > 38 ? <CurrentChapterCircle chapter={4} type={"education"}/> : <ChapterCircle chapter={4} />}
                <ChapterText>Behaviors</ChapterText>
            </EducationChapterSection>
        </ProgressTrackWrapper>
    );
};