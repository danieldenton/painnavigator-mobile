import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from "react-native";
import { activityLevelOptions } from "../data/activity-level-options.data.json";

export const ActivityLevel = () => {
    const { changeProfileEntry, profileData } = useContext(ProfileContext);

    const add = (option) => {
        changeProfileEntry(option, "activity_level");
    };

    const questionOptions = activityLevelOptions.map((option) => {
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
                helpText={"Tap the circle to select"} 
            />
            <View style={{ marginTop: 8 }}>
                {questionOptions}
            </View>
        </>
    );
};