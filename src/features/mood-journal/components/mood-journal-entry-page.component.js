import React, { useContext } from "react";
import { ButtonSection, JournalContainer, QuestionSection, SkipQuestion } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { Feeling } from "./feeling.component";
import { Intensity } from "./intensity.component";
import { Situation } from "./situation.component";
import { WhoIWasWith } from "./who-i-was-with.component";
import { PrimaryThought } from "./primary-thought.component";
import { CognitiveDistortions } from "./cognitive-distortions.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";

export const MoodJournalEntryPage = () => {
    const { currentPage, nextPage } = useContext(MoodJournalContext);

    return (
        <JournalContainer>
            <QuestionSection>
                {currentPage === 1 && <Feeling />}
                {currentPage === 2 && <Intensity />}
                {currentPage === 3 && <Situation />}
                {currentPage === 4 && <WhoIWasWith />}
                {currentPage === 5 && <PrimaryThought />}
                {currentPage === 6 && <CognitiveDistortions />}
            </QuestionSection>
            <ButtonSection>
                <JournalButton title={"Next"} onPress={nextPage} />
                <ProgressDots progress={currentPage} total={6} />
            </ButtonSection>
        </JournalContainer>
    );
};