import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { IntensitySlider } from "../../../components/slider.component";
 
export const Intensity = () => {
    const { changeEntry, currentPageData, moodJournal } = useContext(MoodJournalContext);

    return (
        <>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText}/>
            <IntensitySlider value={moodJournal.intensity} onValueChange={changeEntry} state={currentPageData.state}/>
        </>
    );
}; 