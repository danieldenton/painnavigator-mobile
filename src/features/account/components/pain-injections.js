import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { JournalQuestion } from '../../../components/journal-question.component'
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from 'react-native';
import { injectionsAndSurgery } from "./../data/onboard-data.json"

export const PainInjections = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);

    const add = (optionId) => {
        changeOnboardEntry(optionId, "pain_injections")
    };
    
    const options = injectionsAndSurgery.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={onboardingData.pain_injections}
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