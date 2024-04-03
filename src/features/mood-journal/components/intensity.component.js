import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { MoodJournalContext } from "../../../services/mood-journal.context";
import { IntensitySlider } from "../../../components/slider.component";
 
export const Intensity = () => {
    const { currentPageData, moodJournal, setMoodJournal } = useContext(MoodJournalContext);

    return (
        <>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText}/>
            <IntensitySlider  setState={setMoodJournal} objectKey={currentPageData.state} value={moodJournal.intensity} />
        </>
    );
}; 