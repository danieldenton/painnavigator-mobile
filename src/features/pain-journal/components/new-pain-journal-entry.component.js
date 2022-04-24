import React, { useContext, useEffect, useState } from "react";
import { JournalContainer, QuestionSection, ButtonSection } from "./pain-journal.styles";
import { PainScore } from "./pain-score.component";
import { PainSetting } from "./pain-setting.component";
import { CopingStrategies } from "./coping-strategies.component";
import { OtherNotes } from "./other-notes.component";
import { PainAfter } from "./pain-after.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { JournalButton } from "../../../components/button.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const NewPainJournalEntry = () => {
    const { completePainJournal, currentPage, painJournal, nextPage } = useContext(PainJournalContext);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
        const { setting, copingStrategies } = painJournal;
        if (currentPage === 2) {
            return setting ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else if (currentPage === 3) {
            return copingStrategies ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else {
            return setSubmitDisabled(false)
        };
    }, [painJournal, currentPage]);

    return(
        <>
            <JournalContainer>
                <QuestionSection>
                    {currentPage === 1 && <PainScore />}
                    {currentPage === 2 && <PainSetting />}
                    {currentPage === 3 && <CopingStrategies />}
                    {currentPage === 4 && <OtherNotes />}
                    {currentPage === 5 && <PainAfter />}
                </QuestionSection>
                <ButtonSection>
                    <JournalButton disabled={submitDisabled} title={"Next"} onPress={currentPage === 6 ? completePainJournal : nextPage} />
                    {currentPage > 3 && <SkipQuestion onPress={currentPage > 2 ? completePainJournal : nextPage} />}
                    <ProgressDots progress={currentPage} total={5}/>
                </ButtonSection>
            </JournalContainer>        
        </>
    );
};