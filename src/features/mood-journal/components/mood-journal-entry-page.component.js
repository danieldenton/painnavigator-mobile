import React, { useContext } from "react";
import { ButtonSection, JournalContainer, QuestionSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { Feeling } from "./feeling.component";
import { Intensity } from "./intensity.component";
import { Situation } from "./situation.component";
import { WhoIWasWith } from "./who-i-was-with.component";
import { PrimaryThought } from "./primary-thought.component";
import { CognitiveDistortions } from "./cognitive-distortions.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";

export const MoodJournalEntryPage = () => {
    const { completeMoodJournal, currentPage, nextPage } = useContext(MoodJournalContext);

    return (
        <JournalContainer>
            <QuestionSection style={currentPage === 6 && { marginRight: -24 }}>
                {currentPage === 1 && <Feeling />}
                {currentPage === 2 && <Intensity />}
                {currentPage === 3 && <Situation />}
                {currentPage === 4 && <WhoIWasWith />}
                {currentPage === 5 && <PrimaryThought />}
                {currentPage === 6 && <CognitiveDistortions />}
            </QuestionSection>
            <ButtonSection>
                <JournalButton title={"Next"} onPress={currentPage === 6 ? completeMoodJournal : nextPage} />
                {currentPage > 4 && <SkipQuestion onPress={currentPage === 6 ? completeMoodJournal : nextPage} />}
                <ProgressDots progress={currentPage} total={6} />
            </ButtonSection>
        </JournalContainer>
    );
};