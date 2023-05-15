import React, { useContext } from 'react'
import { AuthenticationContext } from '../../services/authentication/authentication.context'
import { JournalQuestion } from '../journal-question.component'
import { SingleSelectCheckBox } from "../checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { outcomeOptions } from '../../features/completion/data/outcomeOptions.json'

export const UnableToStopWorrying = () => {
    const { outcomeData, changeOutcomeEntry } = useContext(AuthenticationContext)
    
    const add = (optionId) => {
        changeOutcomeEntry(optionId, "unable_to_stop_worrying")
    };
    
    const options = outcomeOptions.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={outcomeData.unable_to_stop_worrying}
            />            
        );
    });

    return (
        <>
            <JournalQuestion 
                 question={"Over the last 2 weeks, how often have you been bothered by the following problem: not being able to stop or control worrying?"} 
                 helpText={"Choose one"} 
            />
                <View style={{ marginBottom: 140 }}>
                    {options}
                </View>
        </>
    )
    
}