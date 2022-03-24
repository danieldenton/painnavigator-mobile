import React, { useContext } from "react";
import { Slider } from "../../../components/slider.component";
import { Question } from "./pain-journal.styles";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const PainAfter = () => {
    const { currentQuestionData, painJournal, setPainJournal } = useContext(PainJournalContext);
    const { question } = currentQuestionData;

    const handleChange = (change) => {
        setPainJournal(journal => ({
            ...journal,
            ["painAfter"]: change
        }));
    };

    return(
        <>
            <Question question={question} />
            <Slider value={painJournal.painAfter} onValueChange={handleChange} />
        </>
    );
};