import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from "react-native";

export const ActivityLevel = () => {
    const { changeProfileEntry, profileData } = useContext(ProfileContext);

    const add = (optionId) => {
        changeProfileEntry(optionId, "activity_level");
    };

    const options = [
        {
            id: 1,
            option: "Not Active",
            helpText: "Rarely if ever exercise"
        }, 
        {
            id: 2,
            option: "Mildly Active",
            helpText: "Walk for 30 min 3-5 days a week"
        }, 
        {
            id: 3,
            option: "Moderately Active",
            helpText: "Vigorous exercise 3+ days a week"
        }, 
        {
            id: 4,
            option: "Very Active",
            helpText: "Vigorous exercise 5+ days a week"
        }
    ];

    const questionOptions = options.map((option) => {
        return (
            <SingleSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                selectedOption={profileData.activity_level}
            />            
        );
    });

    return (
        <>
            <JournalQuestion 
                question={"What is your activity level?"} 
                helpText={"Tap the circles to select"} 
            />
            <View style={{ marginTop: 16 }}>
                {questionOptions}
            </View>
        </>
    );
};