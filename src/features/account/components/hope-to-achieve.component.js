import React, { useContext } from "react";
import { View } from "react-native";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { MultiSelectCheckBox, MultiSelectScroll } from "../../../components/multi-select-checkbox.component";


export const HopeToAchieve = () => {
    const { onboardingData, changeOnboardEntry } = useContext(AuthenticationContext);
    const { pace } = onboardingData;

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