import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from "react-native";

export const Gender = () => {
    const { changeProfileEntry, profileData } = useContext(ProfileContext);

    const add = (optionId) => {
        changeProfileEntry(optionId, "gender");
    };

    const options = [
        {
            id: 1,
            option: "Man",
            helpText: null
        }, 
        {
            id: 2,
            option: "Woman",
            helpText: null
        }, 
        {
            id: 3,
            option: "Nonbinary",
            helpText: null
        }, 
        {
            id: 4,
            option: "Other",
            helpText: null
        }
    ];

    const questionOptions = options.map((option) => {
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