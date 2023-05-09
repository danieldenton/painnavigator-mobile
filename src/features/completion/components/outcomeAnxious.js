import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { JournalQuestion } from '../../../components/journal-question.component'
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { outcomeOptions } from '../data/outcomeOptions.json'

export const OutcomeAnxious = ({ step, choice, setChoice }) => {
    const { outcomeData, changeOutcomeEntry } = useContext(AuthenticationContext)
    const questions = [
        "Over the last 2 weeks, how often have you been bothered by the following problem: not being able to stop or control worrying?",
        "Over the last 2 weeks, how often have you been bothered by the following problem: little interest or pleasure in doing things?",
        "Over the last 2 weeks, how often have you been bothered by the following problem: feeling down, depressed, or hopeless?"
    ]
    const states = ["anxious", "unable_to_stop_worrying", "little_interest_or_pleasure", "depressed"]
    
    const options = outcomeOptions.map((option, idx) => {
        
        const add = (optionId) => {
            changeOutcomeEntry(optionId, "anxious")
        };
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={outcomeData.anxious}
            />            
        );
    });

    return (
        <>
            <JournalQuestion question={"Over the last 2 weeks, how often have you been bothered by the following problem: feeling nervous, anxious or on edge?"} helpText={"Choose one"} />
                <View style={{ marginBottom: 140 }}>
                    {options}
                </View>
        </>
    )
    
}