import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { painDurationOptions } from "../data/pain-duration-options.data.json";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";

export const StartingPainDuration = () => {
    const { changeProfileEntry, profileData } = useContext(ProfileContext);

    const add = (option) => {
        changeProfileEntry(option, "starting_pain_duration");
    };

    const questionOptions = painDurationOptions.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={profileData.starting_pain_duration}
            />            
        );
    });

    return (
        <>
            <JournalQuestion 
                question={"How long have you been experiencing back pain?"} 
                helpText={"Tap the circle to select"} 
            />
            <Scroll style={{ marginTop: 4, paddingRight: 16, paddingLeft: 16 }}>
                <View style={{ marginBottom: 140 }}>
                    {questionOptions}
                </View>
            </Scroll>
        </>
    );
};