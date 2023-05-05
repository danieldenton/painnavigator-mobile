import React, { useContext } from "react";
import { View } from "react-native";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { MultiSelectCheckBox, MultiSelectScroll } from "../../../components/multi-select-checkbox.component";


export const HopeToAchieve = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);
    const { pace } = onboardingData;

    // const { currentPageData, painJournal, setPainJournal } = useContext(PainJournalContext);
    // const { options } = currentPageData;
    // const selectedCopingStrategies = painJournal.copingStrategies;

    const add = (optionId) => {
        setPainJournal(journal => ({
            ...journal,
            ["copingStrategies"]: [...selectedCopingStrategies, optionId]
        }));
    };
    
    const remove = (optionId) => {
        const newCopingStrategies = selectedCopingStrategies.filter(
          (x) => x !== optionId
        );

        setPainJournal(journal => ({
            ...journal,
            ["copingStrategies"]: newCopingStrategies
        }));    
    };

    const copingStrategies = options.map((option) => {
        return (
            <MultiSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                remove={remove}
                selectedOptions={selectedCopingStrategies}
            />            
        );
    });

    return(
        <>
            <JournalQuestion 
                question={"How quickly would you like to move through this program?"} />
         <MultiSelectScroll>
                <View style={{ marginBottom: 60 }}>
                    {copingStrategies}
                </View>
            </MultiSelectScroll>
        </> 
    );
};