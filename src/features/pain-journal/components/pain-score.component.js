import React, { useContext }from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { Question } from "./pain-journal.styles";
import { IntensitySlider } from "../../../components/slider.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const PainScore = () => {
    const { changeEntry, currentPageData, painJournal } = useContext(PainJournalContext);
    const { question, helpText } = currentPageData;

    return(
        <>
            <JournalQuestion question={question} helpText={helpText} />
            <IntensitySlider value={painJournal.score} onValueChange={changeEntry} state={"score"} />
        </>
    );
};