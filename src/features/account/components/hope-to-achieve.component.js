import React, { useContext } from "react";
import { View } from "react-native";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { MultiSelectCheckBox, MultiSelectScroll } from "../../../components/multi-select-checkbox.component";


export const HopeToAchieve = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);
    const { hopes_to_achieve } = onboardingData;

    // const { currentPageData, painJournal, setPainJournal } = useContext(PainJournalContext);
    const selectedHopes = onboardingData.hopes_to_achieve;

    const options = [
        {
            id: 1,
            option: "Less Pain"
        },
        {
            id: 2,
            option: "Improved Function"
        },
        {
            id: 3,
            option: "Improved Mood"
        },
        {
            id: 4,
            option: "Strength & Prevention"
        }
    ]

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
            ["chopes_to_achieve"]: newHopes
        }));    
    };

    const hopesToAchieve = options.map((option) => {
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
                question={"What do you hope to achieve by completing PainNavigator?"} />
         <MultiSelectScroll>
                <View style={{ marginBottom: 60 }}>
                    {hopesToAchieve}
                </View>
            </MultiSelectScroll>
        </> 
    );
};