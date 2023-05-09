import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { JournalQuestion } from '../../../components/journal-question.component'
import { MultiSelectCheckBox, MultiSelectScroll } from "../../../components/multi-select-checkbox.component";
import { View } from 'react-native';
import { outcomeOptions } from './../data//outcomeOptions.json'

export const OutcomeMultipleChoice = ({ step }) => {
    const { outcomeData, setOutcomeData } = useContext(AuthenticationContext)
    const questions = [
        "Over the last 2 weeks, how often have you been bothered by the following problem: feeling nervous, anxious or on edge?",
        "Over the last 2 weeks, how often have you been bothered by the following problem: not being able to stop or control worrying?",
        "Over the last 2 weeks, how often have you been bothered by the following problem: little interest or pleasure in doing things?",
        "Over the last 2 weeks, how often have you been bothered by the following problem: feeling down, depressed, or hopeless?"
    ]
    const states = ["anxious", "unable_to_stop_worrying", "little_interest_or_pleasure", "depressed"]

    const add = (optionId) => {
        setOutcomeData(entry => ({
            ...entry,
            [states[step - 3]]: [optionId]
        }));
    };
    
    const remove = () => {
        setOutcomeData(entry => ({
            ...entry,
            [states[step - 3]]: ""
        }));    
    };

    const answers = outcomeOptions.map((option, idx) => {
        console.log(idx)
        return (
            <MultiSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                remove={remove}
                // selectedOptions={}
            />            
        );
    });

    return (
        <>
            <JournalQuestion question={questions[step - 3]} helpText={"Choose one"} />
            <MultiSelectScroll>
                <View style={{ marginTop: 10, marginBottom: 60 }}>
                    {answers}
                </View>
            </MultiSelectScroll>
        </>
    )
    
}