import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { JournalQuestion } from '../../../components/journal-question.component'
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { injectionsAndSurgery } from "./../data/onboard-data.json"

export const SpineSurgery = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);

    const add = (optionId) => {
        changeOnboardEntry(optionId, "spine_surgery")
    };
    
    const options = injectionsAndSurgery.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={onboardingData.spine_surgery}
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