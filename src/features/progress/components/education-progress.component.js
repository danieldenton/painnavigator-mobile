import React, { useContext } from "react";
import { EducationContext } from "../../../services/education/education.context";
import { Selected } from "../../../icons";
import { 
    ProgressTrackWrapper, 
    ProgressTrackHeader, 
    ChapterCircle,
    ChapterSection, 
    ChapterText, 
    EducationLineSegment 
} from "./progress.styles";

export const EducationProgress = () => {
    const { educationProgress } = useContext(EducationContext);

    return (
        <ProgressTrackWrapper>
            <ProgressTrackHeader>Education</ProgressTrackHeader>
            <ChapterSection>
                {educationProgress === 10 ? <Selected /> : <ChapterCircle chapter={1} />}
                <ChapterText>Introduction</ChapterText>
            </ChapterSection>
            <EducationLineSegment />
            <ChapterSection>
                {educationProgress === 22 ? <Selected /> : <ChapterCircle chapter={2} />}
                <ChapterText>Influences</ChapterText>
            </ChapterSection>
            <EducationLineSegment />
            <ChapterSection>
                {educationProgress === 39 ? <Selected /> : <ChapterCircle chapter={3} />}
                <ChapterText>Strategies</ChapterText>
            </ChapterSection>
            <EducationLineSegment />
            <ChapterSection>
                {educationProgress === 62 ? <Selected /> : <ChapterCircle chapter={4} />}
                <ChapterText>Behaviors</ChapterText>
            </ChapterSection>
        </ProgressTrackWrapper>
    );
};