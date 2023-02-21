import React, { useContext, useEffect, useState } from "react";
import { QuestionSection, ButtonSection } from "../../../components/journals/journal.styles";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { JournalButton } from "../../../components/button.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { Dob } from "../components/dob.component";
import { Phone } from "../components/phone.component";
import { ActivityLevel } from "../components/activity-level.component";
import { StartingPainDuration } from "../components/starting-pain-duration.component";
import { Gender } from "../components/gender.component";
import { track } from "@amplitude/analytics-react-native";
import { PROFILE_EVENTS } from "../../../amplitude-events";

export const NewProfile = ({ navigation }) => {
    const { completeProfile, profileStep, nextProfileStep } = useContext(ProfileContext);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [trackEvent, setTrackEvent] = useState("");
    const [trackSkipEvent, setTrackSkipEvent] = useState("");

    useEffect(() => {
        const { phone, dob, starting_pain_duration, gender, activity_level } = profileData
        if (profileStep === 1) {
            setTrackEvent(PROFILE_EVENTS.PHONE_NUMBER_ENTRY);
            setTrackSkipEvent(PROFILE_EVENTS.PHONE_NUMBER_SKIP);
            return phone.length >= 10
                ? setSubmitDisabled(false)
                : setSubmitDisabled(true);
        } else if (profileStep === 2) {
            setTrackEvent(PROFILE_EVENTS.DOB_ENTRY);
            setTrackSkipEvent(PROFILE_EVENTS.DOB_SKIP);
            return dob.length === 8
                ? setSubmitDisabled(false)
                : setSubmitDisabled(true);
        } else if (profileStep === 3) {
            setTrackEvent(PROFILE_EVENTS.DURATION_OF_LOW_BACK_PAIN_ENTRY);
            setTrackSkipEvent(PROFILE_EVENTS.DURATION_OF_LOW_BACK_PAIN_SKIP);
            return starting_pain_duration
                ? setSubmitDisabled(false)
                : setSubmitDisabled(true);
        } else if (profileStep === 4) {
            setTrackEvent(PROFILE_EVENTS.GENDER_IDENTITY_ENTRY);
            setTrackSkipEvent(PROFILE_EVENTS.GENDER_IDENTITY_SKIP);
            return gender ? setSubmitDisabled(false) : setSubmitDisabled(true);
        } else if (profileStep === 5) {
            setTrackEvent(PROFILE_EVENTS.ACTIVITY_LEVEL_ENTRY);
            setTrackSkipEvent(PROFILE_EVENTS.ACTIVITY_LEVEL_SKIP);
            return activity_level
                ? setSubmitDisabled(false)
                : setSubmitDisabled(true);
        }
    }, [profileData, profileStep]);


    return (
        <>
            <QuestionSection>
                {profileStep === 1 && <Phone />}
                {profileStep === 2 && <Dob />}
                {profileStep === 3 && <StartingPainDuration />}
                {profileStep === 4 && <Gender />}
                {profileStep === 5 && <ActivityLevel />}
            </QuestionSection>
            <ButtonSection>
                <JournalButton
                    title={"Next"}
                    disabled={submitDisabled}
                    onPress={() => {
                        {
                            profileStep === 5 ?
                            (
                                completeProfile(),
                                navigation.navigate("JournalCreated", { type: "Profile" })
                            )
                            : track(trackEvent)
                            nextProfileStep()
                        }
                    }}
                />
                <SkipQuestion
                    onPress={() => {
                        {
                            profileStep === 5 ?
                            (
                                completeProfile(),
                                navigation.navigate("JournalCreated", { type: "Profile" })
                            )
                            : track(trackSkipEvent),
                            nextProfileStep()
                        }
                    }}
                />
                <ProgressDots progress={profileStep} total={5} />
            </ButtonSection>
        </>
    );
};