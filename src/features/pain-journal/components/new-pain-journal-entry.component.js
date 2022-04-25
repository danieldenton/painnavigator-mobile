import React, { useContext, useEffect, useState } from "react";
import { JournalContainer, QuestionSection, ButtonSection } from "../../../components/journals/journal.styles";
import { Intensity } from "./intensity.component";
import { Situation } from "./situation.component";
import { CopingStrategies } from "./coping-strategies.component";
import { Notes } from "./notes.component";
import { IntensityAfter } from "./intensity-after.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { JournalButton } from "../../../components/button.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const NewPainJournalEntry = () => {
    const { completePainJournal, currentPage, painJournal, nextPage } = useContext(PainJournalContext);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    // TODO
    //useEffect(() => {
        //const { feeling, copingStrategies } = painJournal;
        //if (currentPage === 2) {
            //return feeling.length ? setSubmitDisabled(false) : setSubmitDisabled(true)
        //}   else if (currentPage === 3) {
            //return copingStrategies ? setSubmitDisabled(false) : setSubmitDisabled(true)
        //}   else {
            //return setSubmitDisabled(false)
        //};
    //}, [painJournal, currentPage]);

    return(
        <>
            <JournalContainer>
                <QuestionSection>
                    {currentPage === 1 && <Intensity />}
                    {currentPage === 2 && <Situation />}
                    {currentPage === 3 && <CopingStrategies />}
                    {currentPage === 4 && <Notes />}
                    {currentPage === 5 && <IntensityAfter />}
                </QuestionSection>
                <ButtonSection>
                    <JournalButton disabled={submitDisabled} title={"Next"} onPress={currentPage === 6 ? completePainJournal : nextPage} />
                    {currentPage > 2 && <SkipQuestion onPress={currentPage === 6 ? completePainJournal : nextPage} />}
                    <ProgressDots progress={currentPage} total={5}/>
                </ButtonSection>
            </JournalContainer>        
        </>
    );
};