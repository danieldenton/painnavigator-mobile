import React, { useContext } from "react";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SafeArea } from "../../../components/safe-area.component";
import { AccountContainer } from "../components/account.styles";
import { ProfileSetupHeader } from "../components/profile-setup-header.component";
import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { ProgramPaceGoal } from "../components/program-pace-goal.component";
import { PrivacyPolicy } from "../components/privacy-policy.component";
import { Congratulations } from "../components/congratulations";
import { ProfileProgress } from "./profile-setup-progress.component";

export const ProfileSetup = () => {
    const { profileProgress, previousQuestion } = useContext(ProfileContext);
 
    return(
        <SafeArea>
            <AccountContainer>
                <ProfileSetupHeader profileProgress={profileProgress} previousQuestion={previousQuestion} />
                {profileProgress === 1 && <AvgPainPreStart /> }
                {profileProgress === 2 && <ProgramPaceGoal />}
                {profileProgress === 3 && <PrivacyPolicy />}
                {profileProgress === 4 && <Congratulations />}
                <ProfileProgress profileProgress={profileProgress} />
            </AccountContainer>
        </SafeArea>
    );
};