import React, { useContext }from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { IntensitySlider } from "../../../components/slider.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const Intensity = () => {
    const { currentPageData, painJournal, setPainJournal } = useContext(PainJournalContext);
    const { question, helpText } = currentPageData;

    return(
        <>
            <JournalQuestion question={question} helpText={helpText} />
            <IntensitySlider setState={setPainJournal} objectKey={"intensity"} value={painJournal.intensity} />
        </>
    );
};