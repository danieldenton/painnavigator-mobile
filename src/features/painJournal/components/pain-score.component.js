import React, { useContext }from "react";

import { Question } from "../components/pain-journal.styles";
import { Slider } from "../../../components/slider/slider.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const PainScore = () => {
    const { currentQuestionData, painScore, setPainScore  } = useContext(PainJournalContext);
    const { question, helpText } = currentQuestionData;

    return(
        <>
            <Question question={question} helpText={helpText} />
            <Slider value={painScore} onValueChange={setPainScore} />
        </>
    );
};