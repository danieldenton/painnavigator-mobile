import React, { useContext } from "react";
import { View } from "react-native";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { MultiSelectCheckBox, MultiSelectScroll } from "../../../components/multi-select-checkbox.component";


export const HopeToAchieve = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);
    const { hopes_to_achieve } = onboardingData;

    const selectedHopes = hopes_to_achieve;

    const options = [
        {
            id: 1,
            option: "Less Pain",
            helpText: null
        },
        {
            id: 2,
            option: "Improved Function",
            helpText: null
        },
        {
            id: 3,
            option: "Improved Mood",
            helpText: null
        },
        {
            id: 4,
            option: "Strength & Prevention",
            helpText: null
        }
    ]
    console.log(onboardingData)

    const add = (optionId) => {
        changeOnboardEntry(entry => ({
            ...entry,
            ["hopes_to_achieve"]: [...selectedHopes, optionId]
        }));
    };
    
    const remove = (optionId) => {
        const newHopes = selectedHopes.filter(
          (x) => x !== optionId
        );

        changeOnboardEntry(entry => ({
            ...entry,
            ["hopes_to_achieve"]: newHopes
        }));    
    };

    const hopesToAchieve = options.map((option) => {
        // console.log(option)
        return (
            <MultiSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                remove={remove}
                selectedOptions={selectedHopes}
            />            
        );
    });

    return(
        <>
            <JournalQuestion 
                question={"What do you hope to achieve by completing PainNavigator?"} helpText={"Tap the circle to select"} />
         <MultiSelectScroll>
                <View style={{ marginTop: 10, marginBottom: 60 }}>
                    {hopesToAchieve}
                </View>
            </MultiSelectScroll>
        </> 
    );
};