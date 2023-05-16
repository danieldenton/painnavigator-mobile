import React from 'react'
import { JournalQuestion } from '../journal-question.component'
import { SingleSelectCheckBox } from "../checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { options } from './options.json'

export const UnableToStopWorrying = ({ onValueChange, data }) => {
    const add = (optionId) => {
        onValueChange(optionId, "unableToStopWorrying")
    };
    
    const opts = options.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={data.unableToStopWorrying}
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
                    {opts}
                </View>
        </>
    )
    
}