import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { MultiSelectScroll } from "../../../components/checkbox/styles";

export const StartingPainDuration = () => {
    const { changeProfileEntry, profileData } = useContext(ProfileContext);

    const add = (optionId) => {
        changeProfileEntry(optionId, "starting_pain_duration");
    };

    const options = [
        {
            id: 1,
            option: "Less Than 1 Month",
            helpText: null
        }, 
        {
            id: 2,
            option: "1-6 Months",
            helpText: null
        }, 
        {
            id: 3,
            option: "6 Months-1 Year",
            helpText: null
        }, 
        {
            id: 4,
            option: "1-2 Years",
            helpText: null
        }, 
        {
            id: 5,
            option: "3-5 Years",
            helpText: null
        }, 
        {
            id: 6,
            option: "5-10 Years",
            helpText: null
        }, 
        {
            id: 7,
            option: "More Than 10 Years",
            helpText: null
        }, 
        {
            id: 8,
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