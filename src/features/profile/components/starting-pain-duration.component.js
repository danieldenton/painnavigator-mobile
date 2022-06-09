import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { MultiSelectScroll } from "../../../components/checkbox/styles";
import { painDurationOptions } from "../data/pain-duration-options.data.json";

export const StartingPainDuration = () => {
    const { changeProfileEntry, profileData } = useContext(ProfileContext);

    const add = (optionId) => {
        changeProfileEntry(optionId, "starting_pain_duration");
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
                helpText={"Tap the circles to select"} 
            />
            <MultiSelectScroll style={{ marginTop: 16 }}>
                {questionOptions}
            </MultiSelectScroll>
        </>
    );
};