import React, { useContext } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInputMedium } from "../../../components/text-input.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const Situation = () => {
    const { changeEntry, currentPageData, painJournal } = useContext(PainJournalContext);
    // const { questions } = currentPageData;

    const questions = [
        {
            question: "What were you doing when your pain increased?",
            helpText: "Walking down the street on the way to work.",
            value: painJournal.situation,
            inputString: "situation",
            accessibilityLabel: "situation-input"
        },
        {
            question: "What will your reward be?",
            helpText: "Be creative and pick something you really want! This could be a magazine subscription or a dinner out with friends.",
            value: reward,
            inputString: "reward",
            accessibilityLabel: "reward-input"
        }
    ]

    const questionsAndInputs = questions.map((question, idx) => {
        const situations = [painJournal.situation, painJournal.feeling, painJournal.whoIWasWith]
        const situationStrings = ["situation", "feeling", "whoIWasWith"]
        return(
            <>
            <JournalQuestion question={question.question} helpText={question.helpText} key={idx} />
            <TextInputMedium 
                value={situations[idx]}
                onChangeText={(change) => changeEntry(change, situationStrings[idx])}
                key={idx} 
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