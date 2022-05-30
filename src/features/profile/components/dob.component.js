import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const Dob = () => {
    const { changeProfileEntry, profileData } = useContext(ProfileContext);

    return (
        <>
            <JournalQuestion 
                question={"What is your date of birth?"} 
                helpText={"MM/DD/YYYY"}
            />
            <TextInput 
                accessibilityLabel={"phone-number-input"}
                value={profileData.dob}
                onChangeText={(change) => changeProfileEntry(change, "dob")}
            />
        </>
    );
};