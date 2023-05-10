import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { JournalQuestion } from '../../../components/journal-question.component'
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { outcomeOptions } from '../data/outcomeOptions.json'

export const OutcomeLittleInterestOrPleasure = () => {
    const { outcomeData, changeOutcomeEntry } = useContext(AuthenticationContext)
    
    const add = (optionId) => {
        changeOutcomeEntry(optionId, "little_interest_or_pleasure")
    };
    
    const options = outcomeOptions.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={outcomeData.little_interest_or_pleasure}
            />            
        );
    });

    return (
        <>
            <JournalQuestion 
                question={"Over the last 2 weeks, how often have you been bothered by the following problem: little interest or pleasure in doing things?"} 
                helpText={"Choose one"} 
            />
                <View style={{ marginBottom: 140 }}>
                    {options}
                </View>
        </>
    )
    
}