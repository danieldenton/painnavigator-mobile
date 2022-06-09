import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from "react-native";
import { genderOptions } from "../data/gender-options.data.json";

export const Gender = () => {
    const { changeProfileEntry, profileData } = useContext(ProfileContext);

    const add = (optionId) => {
        changeProfileEntry(optionId, "gender");
    };

    const questionOptions = genderOptions.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={profileData.gender}
            />            
        );
    });

    return (
        <>
            <JournalQuestion 
                question={"What is your gender identity?"} 
                helpText={"Tap the circles to select"} 
            />
            <View style={{ marginTop: 16 }}>
                {questionOptions}
            </View>
        </>
    );
};