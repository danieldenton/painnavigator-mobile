import React, { useContext } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const Situation = () => {
    const { changeEntry, currentPageData, painJournal } = useContext(PainJournalContext);
    const { questions } = currentPageData;

    const questionsAndInputs = questions.map((question, idx) => {
        const situations = [painJournal.situation, painJournal.feeling, painJournal.whoIWasWith]
        const situationStrings = ["situation", "feeling", "whoIWasWith"]
        return(
            <>
            <JournalQuestion question={question.question} helpText={question.helpText} key={idx} />
            <TextInputMedium 
                value={situations[idx]}
                onChangeText={(change) => changeEntry(change, situationStrings[idx])}
            />
            </>
        )
    })

    return(
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            {questionsAndInputs}
        </KeyboardAwareScrollView>
    );
};