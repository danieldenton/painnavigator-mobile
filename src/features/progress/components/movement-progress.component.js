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
import { DottedLineSegement } from "../../../components/dotted-line-segment.component";
import { View } from "react-native"; 

export const MovementProgress = () => {
    const { movementProgress } = useContext(MovementContext);

    const dots = [...Array(5)].map((element, index) => {
        return (
            <DottedLineSegement key={index} />
        );
    });

    return (
        <ProgressTrackWrapper>
            <ProgressTrackHeader>Movement</ProgressTrackHeader>
            <ChapterSection>
                {movementProgress > 5 ? <PurpleCheckMark /> : <CurrentChapterCircle chapter={1} type={"movement"} />}
                <ChapterText>Foundations</ChapterText>
            </ChapterSection>
            <View>
                {movementProgress > 5 ? <MovementLineSegmentCompleted /> : <MovementLineSegment>{dots}</MovementLineSegment>}
            </View>
            <ChapterSection>
                {movementProgress > 11 ? <PurpleCheckMark /> : movementProgress > 5 ? <CurrentChapterCircle chapter={2} type={"movement"} /> : <ChapterCircle chapter={2} />}
                <ChapterText>Progressing</ChapterText>
            </ChapterSection>
            <View>
                {movementProgress > 11 ? <MovementLineSegmentCompleted /> : <MovementLineSegment>{dots}</MovementLineSegment>}
            </View>
             <ChapterSection>
                {movementProgress > 17 ? <PurpleCheckMark /> : movementProgress > 11 ? <CurrentChapterCircle chapter={3} type={"movement"} /> : <ChapterCircle chapter={3} />}
                <ChapterText>Strength</ChapterText>
            </ChapterSection>
            <View>
                {movementProgress > 17 ? <MovementLineSegmentCompleted /> : <MovementLineSegment>{dots}</MovementLineSegment>}
            </View>
             <ChapterSection>
                {movementProgress > 23 ? <PurpleCheckMark /> : movementProgress > 17 ? <CurrentChapterCircle chapter={4} type={"movement"} /> : <ChapterCircle chapter={4} />}
                <ChapterText>Endurance</ChapterText>
            </ChapterSection>
            <View>
                {movementProgress > 23 ? <MovementLineSegmentCompleted /> : <MovementLineSegment>{dots}</MovementLineSegment>}
            </View>
             <ChapterSection>
                {movementProgress > 29 ? <PurpleCheckMark /> : movementProgress > 23 ? <CurrentChapterCircle chapter={5} type={"movement"} /> : <ChapterCircle chapter={5} />}
                <ChapterText>Core</ChapterText>
            </ChapterSection>
            <View>
                {movementProgress > 29 ? <MovementLineSegmentCompleted /> : <MovementLineSegment>{dots}</MovementLineSegment>}
            </View>
            <ChapterSection>
                {movementProgress > 35 ? <PurpleCheckMark /> : movementProgress > 29 ? <CurrentChapterCircle chapter={6} type={"movement"} /> : <ChapterCircle chapter={6} />}
                <ChapterText>Mastering</ChapterText>
            </ChapterSection>
        </ProgressTrackWrapper>
    );
};