import React, { useContext } from "react";
import { ProfileContext } from "../../../services/profile/profile-context";
import { SafeArea } from "../../../components/safe-area.component";
import { AccountContainer } from "../components/account.styles";

import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { ProgramPaceGoal } from "../components/program-pace-goal.component";
import { PrivacyPolicy } from "../components/privacy-policy.component";
import { Congratulations } from "../components/congratulations";

export const ProfileSetup = () => {
    const { profileProgress } = useContext(ProfileContext);
 
    return(
        <SafeArea>
            <AccountContainer>
                {profileProgress === 1 && <AvgPainPreStart /> }
                {profileProgress === 2 && <ProgramPaceGoal />}
                {profileProgress === 3 && <PrivacyPolicy />}
                {profileProgress === 4 && <Congratulations />}
            </AccountContainer>
        </SafeArea>
    );
};