import React, { useContext }from "react";
import { Question } from "../components/pain-journal.styles";
import { IntensitySlider } from "../../../components/slider.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const PainScore = () => {
    const { currentQuestionData, newPainJournal, setNewPainJournal } = useContext(PainJournalContext);
    const { question, helpText } = currentQuestionData;

    const handleChange = (change) => {
        setNewPainJournal(journal => ({
            ...journal,
            ["painScore"]: change
        }));
    };

    return(
        <>
            <Question question={question} helpText={helpText} />
            <IntensitySlider value={newPainJournal.painScore} onValueChange={handleChange} />
        </>
    );
};