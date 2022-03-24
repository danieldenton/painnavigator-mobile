import React, { useContext } from "react";
import { Question, Input } from "./pain-journal.styles";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const OtherNotes = () => {
    const { currentQuestionData, painJournal, setPainJournal } = useContext(PainJournalContext);
    const { question } = currentQuestionData;

    const handleChange = (change) => {
        setPainJournal(journal => ({
            ...journal,
            ["otherNotes"]: change
        }));
    };

    return(
        <>
            <Question question={question} />
            <Input
                value={painJournal.otherNotes}
                onChangeText={(change) => handleChange(change)}
                style={{ height: 150 }}
            />
        </>
    );
};