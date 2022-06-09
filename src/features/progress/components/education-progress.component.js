import React, { useContext } from "react";
import { EducationContext } from "../../../services/education/education.context";
import { Selected } from "../../../icons";
import { 
    ProgressTrackWrapper, 
    ProgressTrackHeader, 
    CurrentChapterCircle,
    ChapterCircle,
    ChapterSection, 
    ChapterText, 
    EducationLineSegment,
    EducationLineSegmentCompleted
} from "./progress.styles";

export const EducationProgress = () => {
    const { educationProgress } = useContext(EducationContext);

    return (
        <ProgressTrackWrapper>
            <ProgressTrackHeader>Education</ProgressTrackHeader>
            <ChapterSection>
                {educationProgress > 9 ? <Selected /> : <CurrentChapterCircle chapter={1} type={"education"} />}
                <ChapterText>Introduction</ChapterText>
            </ChapterSection>
            {educationProgress > 9 ? <EducationLineSegmentCompleted /> : <EducationLineSegment />}
            <ChapterSection>
                {educationProgress > 21 ? <Selected /> : educationProgress > 9 ? <CurrentChapterCircle chapter={2} type={"education"} /> : <ChapterCircle chapter={2} />}
                <ChapterText>Influences</ChapterText>
            </ChapterSection>
            {educationProgress > 21 ? <EducationLineSegmentCompleted /> : <EducationLineSegment />}
            <ChapterSection>
                {educationProgress > 38 ? <Selected /> : educationProgress > 21 ? <CurrentChapterCircle chapter={3} type={"education"}/> : <ChapterCircle chapter={3} />}
                <ChapterText>Strategies</ChapterText>
            </ChapterSection>
            {educationProgress > 38 ? <EducationLineSegmentCompleted /> : <EducationLineSegment />}
            <ChapterSection>
                {educationProgress > 61 ? <Selected /> : educationProgress > 38 ? <CurrentChapterCircle chapter={4} type={"education"}/> : <ChapterCircle chapter={4} />}
                <ChapterText>Behaviors</ChapterText>
            </ChapterSection>
        </ProgressTrackWrapper>
    );
};