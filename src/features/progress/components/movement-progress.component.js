import React, { useContext } from "react";
import { MovementContext } from "../../../services/movement/movement.context";
import { PurpleCheckMark } from "../../../icons";
import { 
    ProgressTrackWrapper, 
    ProgressTrackHeader, 
    ChapterCircle,
    ChapterSection, 
    ChapterText, 
    MovementLineSegment 
} from "./progress.styles";

export const MovementProgress = () => {
    const { movementProgress } = useContext(MovementContext);

    return (
        <ProgressTrackWrapper>
            <ProgressTrackHeader>Movement</ProgressTrackHeader>
            <ChapterSection>
                {movementProgress === 6 ? <PurpleCheckMark /> : <ChapterCircle chapter={1} />}
                <ChapterText>Foundations</ChapterText>
            </ChapterSection>
            <MovementLineSegment />
             <ChapterSection>
                {movementProgress === 12 ? <PurpleCheckMark /> : <ChapterCircle chapter={2} />}
                <ChapterText>Progressing</ChapterText>
            </ChapterSection>
            <MovementLineSegment />
             <ChapterSection>
                {movementProgress === 18 ? <PurpleCheckMark /> : <ChapterCircle chapter={3} />}
                <ChapterText>Strength</ChapterText>
            </ChapterSection>
            <MovementLineSegment />
             <ChapterSection>
                {movementProgress === 24 ? <PurpleCheckMark /> : <ChapterCircle chapter={4} />}
                <ChapterText>Endurance</ChapterText>
            </ChapterSection>
            <MovementLineSegment />
             <ChapterSection>
                {movementProgress === 30 ? <PurpleCheckMark /> : <ChapterCircle chapter={5} />}
                <ChapterText>Core</ChapterText>
            </ChapterSection>
            <MovementLineSegment />
             <ChapterSection>
                {movementProgress === 36 ? <PurpleCheckMark /> : <ChapterCircle chapter={6} />}
                <ChapterText>Mastering</ChapterText>
            </ChapterSection>
        </ProgressTrackWrapper>
    );
};