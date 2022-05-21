import React, { useEffect, useContext, useState } from "react";
import { ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { Feeling } from "./feeling.component";
import { Intensity } from "./intensity.component";
import { Situation } from "./situation.component";
import { PrimaryThought } from "./primary-thought.component";
import { CognitiveDistortions } from "./cognitive-distortions.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";

export const NewMoodJournalEntry = () => {
    const { completeMoodJournal, currentPage, moodJournal, nextPage } = useContext(MoodJournalContext);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    
    useEffect(() => {
        const { feeling, situation } = moodJournal;
        if (currentPage === 1) {
            return feeling ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else if (currentPage === 3) {
            return situation ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else {
            return setSubmitDisabled(false)
        };
    }, [moodJournal, currentPage]);
    
    return (
        <>
            <QuestionSection>
                {currentPage === 1 && <Feeling />}
                {currentPage === 2 && <Intensity />}
                {currentPage === 3 && <Situation />}
                {currentPage === 4 && <PrimaryThought />}
                {currentPage === 5 && <CognitiveDistortions />}
            </QuestionSection>
            <ButtonSection>
                <JournalButton disabled={submitDisabled} title={"Next"} onPress={currentPage === 5 ? completeMoodJournal : nextPage} />
                {currentPage > 3 && <SkipQuestion onPress={currentPage === 5 ? completeMoodJournal : nextPage} />}
                <ProgressDots progress={currentPage} total={5} />
            </ButtonSection>
        </>
    );
};