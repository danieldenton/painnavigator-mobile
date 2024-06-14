import React, { useContext } from "react";
import {
  QuestionSection,
  ButtonSection,
} from "../../../components/journals/journal.styles";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { JournalButton } from "../../../components/button.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Dob } from "../components/dob.component";
import { Phone } from "../components/phone.component";
import { ActivityLevel } from "../components/activity-level.component";
import { StartingPainDuration } from "../components/starting-pain-duration.component";
import { Gender } from "../components/gender.component";

export const NewProfile = ({ navigation }) => {
  const { completeProfile, profileStep, nextProfileStep, profileData } =
    useContext(ProfileContext);
  const { phone, dob, starting_pain_duration, gender, activity_level } =
    profileData;
  const { uid } = useContext(AuthenticationContext);

  const steps = [
    {
      step: <Phone />,
      submitCondition: phone.length === 13,
    },
    {
      step: <Dob />,
      submitCondition: dob.length === 8,
    },
    {
      step: <StartingPainDuration />,
      submitCondition: starting_pain_duration,
    },
    {
      step: <Gender />,
      submitCondition: gender,
    },
    {
      step: <ActivityLevel />,
      submitCondition: activity_level,
    },
  ];

  const handleCompleteProfile = () => {};

  return (
    <>
      <QuestionSection>{steps[profileStep].step}</QuestionSection>
      <ButtonSection>
        <JournalButton
          title={"Next"}
          disabled={steps[profileStep].submitCondition ? false : true}
          onPress={() => {
            {
              profileStep === 4
                ? (completeProfile(uid),
                  navigation.navigate("JournalCreated", { type: "Profile" }))
                : nextProfileStep();
            }
          }}
        />
        <SkipQuestion
          onPress={() => {
            {
              profileStep === 4
                ? (completeProfile(uid),
                  navigation.navigate("JournalCreated", { type: "Profile" }))
                : nextProfileStep();
            }
          }}
        />
        <ProgressDots progress={profileStep} total={6} />
      </ButtonSection>
    </>
  );
};
