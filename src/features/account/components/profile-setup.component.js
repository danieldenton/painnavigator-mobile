import React, { useContext } from "react";
import { ProfileContext } from "../../../services/profile/profile-context";
import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { Commitment } from "./commitment.component";
import { ProgramPaceGoal } from "../components/program-pace-goal.component";
import { PrivacyPolicy } from "../components/privacy-policy.component";
import { Congratulations } from "../components/congratulations";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";

export const ProfileSetup = ({ navigation }) => {
    const { profileProgress, previousQuestion, nextQuestion } = useContext(ProfileContext);

    return(
        <>
            <NavigationBarLeft navigation={navigation} screen={"Sign Up"} previousPage={previousQuestion} />
            {profileProgress === 1 && <AvgPainPreStart /> }
            {profileProgress === 2 && <Commitment />}
            {profileProgress === 3 && <ProgramPaceGoal />}
            {profileProgress === 4 && <Congratulations />}
            <ButtonSection>
                <JournalButton title={"Next"} onPress={nextQuestion} />
                <ProgressDots progress={profileProgress} total={3} />
            </ButtonSection>
        </>
    );
};