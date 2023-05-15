import React from 'react'
import { JournalQuestion } from '../journal-question.component'
import { SingleSelectCheckBox } from "../checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { outcomeOptions } from '../../features/completion/data/outcomeOptions.json'

export const Anxious = ({ onValueChange, data}) => {
    const add = (optionId) => {
        onValueChange(optionId, "anxious")
    };
    
    const options = outcomeOptions.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={data.anxious}
            />            
        );
    });

    return (
        <>
            <JournalQuestion 
                question={"Over the last 2 weeks, how often have you been bothered by the following problem: feeling nervous, anxious or on edge?"} 
                helpText={"Choose one"} 
            />
                <View style={{ marginBottom: 140 }}>
                    {options}
                </View>
        </>
    )
    
}