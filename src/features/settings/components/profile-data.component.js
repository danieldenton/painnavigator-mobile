import React, { useContext, useEffect } from "react";
import { InputQuestion, IntensityQuestion, SelectQuestion } from "../../../components/review-journal-question.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { View } from "react-native";

export const ProfileData = ({ editing }) => {
    const { editProfile, reviewProfile, userInfo, profileComplete, setReviewProfile } = useContext(ProfileContext);
    const { first_name, email, phone, dob, gender, starting_pain_duration, activity_level } = userInfo;
    const { 
        first_name: editFirstName, 
        email: editEmail, 
        phone: editPhone,
        dob: editDob, 
        gender: editGender, 
        starting_pain_duration: editPainDuration, 
        activity_level: editActivityLevel 
    } = reviewProfile;

    useEffect(() => {
        setReviewProfile(userInfo);
    }, [userInfo]);

    const onboardData = [
        {question: "NAME", response: editing ? editFirstName : first_name, type: "input", state: "first_name"},
        {question: "EMAIL", response: editing ? editEmail : email, type: "input", state: "email"},
        {question: "PHONE", response: editing ? editPhone : phone, type: "input", state: "phone"}
    ];

    const onboardDataResponses = onboardData.map((entry) => {
        return (
            entry.type === "input" ? 
                <InputQuestion 
                    changeEntry={editProfile}
                    editing={editing}
                    entry={entry}
                    key={entry.state} 
                /> 
                : 
                <IntensityQuestion 
                    changeEntry={editProfile}
                    editing={editing} 
                    entry={entry} 
                    key={entry.state} 
                />
        );
    });

    const profileData = [
        {question: "AGE", response: editing ? editDob : dob, type: "input", state: "dob"},
        {question: "GENDER", max: 4, response: editing ? editGender : gender, type: "intensity", state: "gender"},
        {question: "LENGTH OF BACK PAIN", max: 8, response: editing ? editPainDuration : starting_pain_duration, type: "intensity", state: "starting_pain_duration"},
        {question: "ACTIVITY LEVEL", max: 4, response: editing ? editActivityLevel : activity_level, type: "intensity", state: "activity_level"}
    ];

    const profileDataResponses = profileData.map((entry) => {
        return (
            entry.type === "input" ? 
                <InputQuestion 
                    changeEntry={editProfile}
                    editing={editing}
                    entry={entry}
                    key={entry.state} 
                /> 
                : 
                <SelectQuestion 
                    changeEntry={editProfile}
                    editing={editing} 
                    entry={entry} 
                    key={entry.state} 
                />
        );
    });

    return (
        <View style={{ marginBottom: editing ? 100 : 0 }}>
            {onboardDataResponses}
            {profileComplete && profileDataResponses}
        </View>
    );
};