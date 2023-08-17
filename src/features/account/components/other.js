import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { JournalQuestion } from '../../../components/journal-question.component'
import { AuthTextInput } from '../../../components/text-input.component';

export const Other = ({ onValueChange, data }) => {
    // const { changeOnboardEntry } = useContext(AuthenticationContext)
    // const add = (optionId) => {
    //     onValueChange(optionId, "typeOfPain")
    // };
    
    // const options = typeOfPain.map((option) => {
    //     return (
    //         <SingleSelectCheckBox 
    //             add={add}
    //             key={option.option}
    //             optionData={option} 
    //             selectedOption={data.typeOfPain}
    //         />            
    //     );
    // });

    return (
        <>
            <JournalQuestion 
                question={'Please enter the location of your worst pain.'} 
            />
            <AuthTextInput
                accessibilityLabel={"referral-code-input"}
                value={data.typeOfPain}
                onChangeText={(typeOfPain) => onValueChange(data.typeOfPain, "type_of_pain")}
            />
                
        </>
    )
    
}