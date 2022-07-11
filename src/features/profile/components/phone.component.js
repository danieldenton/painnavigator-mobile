import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const Phone = () => {
    const { changeProfileEntry, profileData } = useContext(ProfileContext);

    return (
        <>
            <JournalQuestion question={"What is your phone number?"} />
            <TextInput 
                accessibilityLabel={"phone-number-input"}
                value={profileData.phone}
                onChangeText={(change) => changeProfileEntry(change, "phone")}
                keyboardType={"phone-pad"}
            />
        </>
    );
};