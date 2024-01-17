import React, { useContext } from "react";
import { View } from "react-native";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { MultiSelectCheckBox, MultiSelectScroll } from "../../../components/multi-select-checkbox.component";
import { hopesOptions } from "./../data/onboard-data.json"

export const HopeToAchieve = () => {
    const { onboardingData, setOnboardingData} = useContext(AuthenticationContext);
    const { hopesToAchieve } = onboardingData;

    const selectedHopes = hopesToAchieve;

    const add = (optionId) => {
        setOnboardingData(object => ({
            ...object,
            ["hopesToAchieve"]: [...selectedHopes, optionId]
        }));
    };
    
    const remove = (optionId) => {
        const newHopes = selectedHopes.filter(
          (x) => x !== optionId
        );
        setOnboardingData(entry => ({
            ...entry,
            ["hopesToAchieve"]: newHopes
        }));    
    };

    const hopes = hopesOptions.map((option) => {
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
                question={"What do you hope to achieve by completing PainNavigator?"} helpText={"Tap the circle to select. You can select more then one of these."} />
            <MultiSelectScroll>
                <View style={{ marginTop: 10, marginBottom: 60 }}>
                    {hopes}
                </View>
            </MultiSelectScroll>
        </> 
    );
};