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

export const NewProfile = ({ navigation }) => {
    const { completeProfile, profileStep, nextProfileStep } = useContext(ProfileContext);

    return(
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
                    onPress={() => {
                        {   profileStep === 5 ? 
                            (
                                completeProfile(),
                                navigation.navigate("JournalCreated", { type: "Profile" })
                            )
                            :
                            nextProfileStep()
                        }
                    }} 
                />
                <SkipQuestion 
                    onPress={() => {
                        {   profileStep === 5 ? 
                            (
                                completeProfile(),
                                navigation.navigate("JournalCreated", { type: "Profile" })
                            )
                            :
                            nextProfileStep()
                        }
                    }} 
                />
                <ProgressDots progress={profileStep} total={5}/>
            </ButtonSection>       
        </>
    );
};