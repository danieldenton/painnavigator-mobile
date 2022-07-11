import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from "react-native";
import { genderOptions } from "../data/gender-options.data.json";
import { Scroll } from "../../../components/scroll.component";

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