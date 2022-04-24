import React, { useEffect, useContext, useState } from "react";
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

export const NewMoodJournalEntry = () => {
    const { completeMoodJournal, currentPage, moodJournalEntry, nextPage } = useContext(MoodJournalContext);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    
    useEffect(() => {
        const { feeling, situation } = moodJournalEntry;
        if (currentPage === 1) {
            return feeling ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else if (currentPage === 3) {
            return situation ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else {
            return setSubmitDisabled(false)
        };
    }, [moodJournalEntry, currentPage]);
    
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
                <JournalButton disabled={submitDisabled} title={"Next"} onPress={currentPage === 6 ? completeMoodJournal : nextPage} />
                {currentPage > 3 && <SkipQuestion onPress={currentPage === 6 ? completeMoodJournal : nextPage} />}
                <ProgressDots progress={currentPage} total={6} />
            </ButtonSection>
        </JournalContainer>
    );
};