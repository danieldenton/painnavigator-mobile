import React, { useContext } from "react";
import { EducationContext } from "../../../services/education/education.context";
import { MovementContext } from "../../../services/movement/movement.context";
// import { movementChapters } from "../data/movement-chapter-data.json";
import { 
    CurrentChapterCircle,
    ChapterCircle,
    ChapterSection, 
    ChapterText, 
    EducationLineSegmentCompleted,
    EducationLineSegment,
    MovementLineSegmentCompleted,
    MovementLineSegment
} from "./progress.styles";

export const ChapterSection = ({ chapter, type, progressMarker, icon }) => {
    const { educationProgress } = useContext(EducationContext);
    const { movementProgress } = useContext(MovementContext);

    const progress = type === "education" ? educationProgress : movementProgress;

    return (
        <>
            <ChapterSection>
                {progress > progressMarker ? 
                    <PurpleCheckMark /> 
                    :
                    <CurrentChapterCircle chapter={chapter} type={type} />
                }
                <ChapterText>Foundations</ChapterText>
            </ChapterSection>
            {progress > progressMarker ?
                type === "education" ? 
                <EducationLineSegmentCompleted /> : <MovementLineSegmentCompleted />
                :
                type === "movement" ?
                <EducationLineSegment /> : <MovementLineSegment />
            }
        </>
    );
};