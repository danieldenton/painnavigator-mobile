import React from 'react'
import { JournalQuestion } from '../../../components/journal-question.component'
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { typeOfPain } from "./../data/onboard-data.json"

export const TypeOfPain = ({ onValueChange, data }) => {
    const add = (optionId) => {
        onValueChange(optionId, "painInjections")
    };
    
    const options = typeOfPain.map((option) => {
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
                <View style={{ marginTop: 20, marginBottom: 140 }}>
                    {options}
                </View>
        </>
    )
    
}