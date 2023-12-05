import React, { useContext } from "react";
import { View, Text } from "react-native";
import { EducationContext } from "../../../services/education/education.context";
import { Selected } from "../../../icons";
import { 
    progressStyles, 
    CurrentChapterCircle,
    ChapterCircle
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
        <View style={progressStyles.trackWrapper}>
            <Text style={progressStyles.trackHeader}>Education</Text>
            <View style={progressStyles.educationChapterSection}>
                {currentModule.id > 9 ? <Selected /> : <CurrentChapterCircle chapter={1} type={"education"} />}
                <Text style={progressStyles.chapterText}>Introduction</Text>
            </View>
            <View>
                {currentModule.id > 9 ? <View style={progressStyles.educationLineSegmentCompleted} /> : <View style={progressStyles.incompleteBridge}>{dots}</View>}
            </View>
            <View style={progressStyles.educationChapterSection}>
                {currentModule.id > 21 ? <Selected /> : currentModule.id > 9 ? <CurrentChapterCircle chapter={2} type={"education"} /> : <ChapterCircle chapter={2} />}
                <Text style={progressStyles.chapterText}>Influences</Text>
            </View>
            <View>
                {currentModule.id > 21 ? <View style={progressStyles.educationLineSegmentCompleted} /> : <View style={progressStyles.incompleteBridge}>{dots}</View>}
            </View>
            <View style={progressStyles.educationChapterSection}>
                {currentModule.id > 38 ? <Selected /> : currentModule.id > 21 ? <CurrentChapterCircle chapter={3} type={"education"}/> : <ChapterCircle chapter={3} />}
                <Text style={progressStyles.chapterText}>Strategies</Text>
            </View>
            <View style={progressStyles.educationChapterSection}>
                {currentModule.id > 38 ? <View style={progressStyles.educationLineSegmentCompleted} /> : <View style={progressStyles.incompleteBridge}>{dots}</View>}
            </View>
            <View style={progressStyles.educationChapterSection}>
                {currentModule.id > 61 ? <Selected /> : currentModule.id > 38 ? <CurrentChapterCircle chapter={4} type={"education"}/> : <ChapterCircle chapter={4} />}
                <Text style={progressStyles.chapterText}>Behaviors</Text>
            </View>
        </View>
    );
};