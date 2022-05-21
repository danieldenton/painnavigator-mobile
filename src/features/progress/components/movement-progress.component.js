import React, { useContext } from "react";
import { MovementContext } from "../../../services/movement/movement.context";
import { PurpleCheckMark } from "../../../icons";
import { 
    ProgressTrackWrapper, 
    ProgressTrackHeader, 
    CurrentChapterCircle,
    ChapterCircle,
    ChapterSection, 
    ChapterText, 
    MovementLineSegmentCompleted,
    MovementLineSegment
} from "./progress.styles";

export const MovementProgress = () => {
    const { movementProgress } = useContext(MovementContext);

    return (
        <ProgressTrackWrapper>
            <ProgressTrackHeader>Movement</ProgressTrackHeader>
            <ChapterSection>
                {movementProgress > 5 ? <PurpleCheckMark /> : <CurrentChapterCircle chapter={1} type={"movement"} />}
                <ChapterText>Foundations</ChapterText>
            </ChapterSection>
            {movementProgress > 5 ? <MovementLineSegmentCompleted /> : <MovementLineSegment />}
            <ChapterSection>
                {movementProgress > 11 ? <PurpleCheckMark /> : movementProgress > 5 ? <CurrentChapterCircle chapter={2} type={"movement"} /> : <ChapterCircle chapter={2} />}
                <ChapterText>Progressing</ChapterText>
            </ChapterSection>
            {movementProgress > 11 ? <MovementLineSegmentCompleted /> : <MovementLineSegment />}
             <ChapterSection>
                {movementProgress > 17 ? <PurpleCheckMark /> : movementProgress > 11 ? <CurrentChapterCircle chapter={3} type={"movement"} /> : <ChapterCircle chapter={3} />}
                <ChapterText>Strength</ChapterText>
            </ChapterSection>
            {movementProgress > 17 ? <MovementLineSegmentCompleted /> : <MovementLineSegment />}
             <ChapterSection>
                {movementProgress > 23 ? <PurpleCheckMark /> : movementProgress > 17 ? <CurrentChapterCircle chapter={4} type={"movement"} /> : <ChapterCircle chapter={4} />}
                <ChapterText>Endurance</ChapterText>
            </ChapterSection>
            {movementProgress > 23 ? <MovementLineSegmentCompleted /> : <MovementLineSegment />}
             <ChapterSection>
                {movementProgress > 29 ? <PurpleCheckMark /> : movementProgress > 23 ? <CurrentChapterCircle chapter={5} type={"movement"} /> : <ChapterCircle chapter={5} />}
                <ChapterText>Core</ChapterText>
            </ChapterSection>
            {movementProgress > 29 ? <MovementLineSegmentCompleted /> : <MovementLineSegment />}
             <ChapterSection>
                {movementProgress > 35 ? <PurpleCheckMark /> : movementProgress > 29 ? <CurrentChapterCircle chapter={6} type={"movement"} /> : <ChapterCircle chapter={6} />}
                <ChapterText>Mastering</ChapterText>
            </ChapterSection>
        </ProgressTrackWrapper>
    );
};