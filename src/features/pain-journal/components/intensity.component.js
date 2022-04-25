import React, { useContext }from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { IntensitySlider } from "../../../components/slider.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const Intensity = () => {
    const { changeEntry, currentPageData, painJournal } = useContext(PainJournalContext);
    const { question, helpText } = currentPageData;

    return(
        <>
            <JournalQuestion question={question} helpText={helpText} />
            <IntensitySlider value={painJournal.intensity} onValueChange={changeEntry} state={"intensity"} />
        </>
    );
};