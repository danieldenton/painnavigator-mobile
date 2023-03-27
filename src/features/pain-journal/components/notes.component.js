import React, { useContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { QuestionAndInput } from "../../../components/question-and-input.component";

export const Notes = () => {
    const { changeEntry, painJournal } = useContext(PainJournalContext);
    
    const question = {
        question: "Anything else you'd like to add?",
        helpText: "Enter some notes that will be helpful to reflect on.",
        value: painJournal.notes,
        inputString: "notes",
        accessibilityLabel: "notes-input"
    }

    return(
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            <QuestionAndInput question={question} input={changeEntry} key={1} />
        </KeyboardAwareScrollView>
    );
};