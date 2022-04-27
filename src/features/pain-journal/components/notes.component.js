import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const Notes = () => {
    const { changeEntry, currentPageData, painJournal } = useContext(PainJournalContext);
    const { question } = currentPageData;

    return(
        <>
            <JournalQuestion question={question} />
            <TextInputMedium
                value={painJournal.notes}
                onChangeText={(change) => changeEntry(change, "notes")}
            />
        </>
    );
};