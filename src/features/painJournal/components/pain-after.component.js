import React, { useContext } from "react";
import { Slider } from "../../../components/slider.component";
import { Question } from "./pain-journal.styles";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const PainAfter = () => {
    const { currentQuestionData, newPainJournal, setNewPainJournal } = useContext(PainJournalContext);
    const { question } = currentQuestionData;

    const handleChange = (change) => {
        setNewPainJournal(journal => ({
            ...journal,
            ["painAfter"]: change
        }));
    };

    return(
        <>
            <Question question={question} />
            <Slider value={newPainJournal.painAfter} onValueChange={handleChange} />
        </>
    );
};