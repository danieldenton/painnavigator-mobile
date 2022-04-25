import React, { useContext } from "react";
import { IntensitySlider } from "../../../components/slider.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const IntensityAfter = () => {
    const { changeEntry, currentPageData, painJournal } = useContext(PainJournalContext);
    const { question } = currentPageData;

    return(
        <>
            <JournalQuestion question={question} />
            <IntensitySlider 
                onValueChange={changeEntry} 
                state={"intensityAfter"} 
                value={painJournal.intensityAfter} 
            />
        </>
    );
};