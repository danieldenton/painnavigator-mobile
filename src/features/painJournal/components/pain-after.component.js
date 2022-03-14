import React, { useContext } from "react";

import { Slider } from "../../../components/slider/slider.component";
import { Question } from "./pain-journal.styles";

import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const PainAfter = () => {
    const { currentQuestionData, painAfter, setPainAfter } = useContext(PainJournalContext);
    const { question } = currentQuestionData;

    return(
        <>
            <Question question={question} />
            <Slider value={painAfter} onValueChange={setPainAfter} />
        </>
    );
};