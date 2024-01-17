import React, { useContext } from "react";
import { IntensitySlider } from "../../../components/slider.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const IntensityAfter = () => {
    const { currentPageData, painJournal, setPainJournal } = useContext(PainJournalContext);
    const { question } = currentPageData;

    return(
        <>
            <JournalQuestion question={question} />
            <IntensitySlider 
                setState={setPainJournal} 
                objectKey={"intensityAfter"} 
                value={painJournal.intensityAfter} 
            />
        </>
    );
};