import React from 'react'
import { JournalQuestion } from '../../../components/journal-question.component'
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { injectionsAndSurgery } from "./../data/onboard-data.json"

export const PainInjections = ({ onValueChange, data }) => {
    const add = (optionId) => {
        onValueChange(optionId, "painInjections")
    };
    
    const options = injectionsAndSurgery.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={data.painInjections}
            />            
        );
    });

    return (
        <>
            <JournalQuestion 
                question={"Are you currently undergoing pain injections as part of your treatment plan?"} 
            />
                <View style={{ marginBottom: 140 }}>
                    {options}
                </View>
        </>
    )
    
}