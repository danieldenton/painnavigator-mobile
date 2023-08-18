import React from 'react'
import { JournalQuestion } from '../../../components/journal-question.component'
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { typeOfPain } from "./../data/onboard-data.json"
import { isAndroid } from '../../../utils';

export const TypeOfPain = ({ onValueChange, data }) => {
    const add = (optionId) => {
        onValueChange(optionId, "typeOfPain")
    };
    
    const options = typeOfPain.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.option}
                optionData={option} 
                selectedOption={data.typeOfPain}
            />            
        );
    });

    return (
        <>
            <JournalQuestion 
                question={"Where is the location of your worst pain?"} 
            />
                <View style={{ marginTop: isAndroid ? 5 : 20, marginBottom: 140 }}>
                    {options}
                </View>
        </>
    )
    
}