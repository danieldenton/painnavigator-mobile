import React, { useContext } from "react";

import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

import { Question, Input } from "./pain-journal.styles";

export const OtherNotes = () => {
    const { currentQuestionData, otherNotes, setOtherNotes } = useContext(PainJournalContext);
    const { question } = currentQuestionData;

    return(
        <>
            <Question question={question} />
            <Input
                value={otherNotes}
                onChangeText={(text) => {
                    setOtherNotes(text);
                }}
                style={{
                    height: 150
                }}
            />
        </>
    );
};