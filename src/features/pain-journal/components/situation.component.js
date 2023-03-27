import React, { useContext } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { QuestionAndInput } from "../../../components/question-and-input.component"
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const Situation = () => {
    const { changeEntry, painJournal } = useContext(PainJournalContext);

    const questions = [
        {
            question: "What were you doing when your pain increased?",
            helpText: "Walking down the street on the way to work.",
            value: painJournal.situation,
            inputString: "situation",
            accessibilityLabel: "situation-input"
        },
        {
            question: "What were you feeling?",
            helpText: "I was feeling anxious because I was running late.",
            value: painJournal.feeling,
            inputString: "feeling",
            accessibilityLabel: "feeling-input"
        },
        {
            question: "Who were you with?",
            helpText: "I was by myself.",
            value: painJournal.whoIWasWith,
            inputString: "whoIWasWith",
            accessibilityLabel: "whoIWasWith-label"
        }

    ]

    const questionsAndInputs = questions.map((question, idx) => {
        return <QuestionAndInput question={question} input={changeEntry} key={idx}/>
    })

    return(
        <KeyboardAwareScrollView style={{ marginBottom: 120, marginRight: -16, paddingRight: 16 }}>
            {questionsAndInputs}
        </KeyboardAwareScrollView>
    );
};