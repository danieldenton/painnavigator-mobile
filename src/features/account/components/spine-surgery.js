import React from 'react'
import { JournalQuestion } from '../../../components/journal-question.component'
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { injectionsAndSurgery } from "./../data/onboard-data.json"

export const SpineSurgery = ({ onValueChange, data }) => {
    const add = (optionId) => {
        onValueChange(optionId, "spineSurgery")
    };
    
    const options = injectionsAndSurgery.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={data.spineSurgery}
            />            
        );
    });

    return (
        <>
            <JournalQuestion 
                question={"Have you undergone spine surgery in the past 3 months?"} 
            />
                <View style={{ marginBottom: 140 }}>
                    {options}
                </View>
        </>
    )
    
}