import React, { useContext } from "react";
import {
  QuestionSection,
  ButtonSection,
} from "../../../components/journals/journal.styles";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { JournalButton } from "../../../components/button.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { AuthenticationContext } from "../../../services/authentication.context";
import { Dob } from "../components/dob.component";
import { Phone } from "../components/phone.component";
import { ActivityLevel } from "../components/activity-level.component";
import { StartingPainDuration } from "../components/starting-pain-duration.component";
import { Gender } from "../components/gender.component";
import { track } from "@amplitude/analytics-react-native";
import { PROFILE_EVENTS } from "../../../amplitude-events";

export const NewProfile = ({ navigation }) => {
  const { completeProfile, profileStep, nextProfileStep, profileData } =
    useContext(ProfileContext);
  const { phone, dob, starting_pain_duration, gender, activity_level } =
    profileData;
  const { uid } = useContext(AuthenticationContext);

  const steps = [
    {
      step: <Phone />,
      trackEvent: PROFILE_EVENTS.PHONE_NUMBER_ENTRY,
      trackSkipEvent: PROFILE_EVENTS.PHONE_NUMBER_SKIP,
      submitCondition: phone.length === 10,
    },
    {
      step: <Dob />,
      trackEvent: PROFILE_EVENTS.DOB_ENTRY,
      trackSkipEvent: PROFILE_EVENTS.DOB_SKIP,
      submitCondition: dob.length === 8,
    },
    {
      step: <StartingPainDuration />,
      trackEvent: PROFILE_EVENTS.DURATION_OF_LOW_BACK_PAIN_ENTRY,
      trackSkipEvent: PROFILE_EVENTS.DURATION_OF_LOW_BACK_PAIN_SKIP,
      submitCondition: starting_pain_duration,
    },
    {
      step: <Gender />,
      trackEvent: PROFILE_EVENTS.GENDER_IDENTITY_ENTRY,
      trackSkipEvent: PROFILE_EVENTS.GENDER_IDENTITY_SKIP,
      submitCondition: gender,
    },
    {
      step: <ActivityLevel />,
      trackEvent: PROFILE_EVENTS.ACTIVITY_LEVEL_ENTRY,
      trackSkipEvent: PROFILE_EVENTS.ACTIVITY_LEVEL_SKIP,
      submitCondition: activity_level,
    },
  ];

  const handleNextProfileStep = () => {
    track(steps[profileStep].trackEvent);
    nextProfileStep();
  };

  const handleSkipQuestion = () => {
    track(steps[profileStep].trackSkipEvent);
    nextProfileStep();
  };

  const handleCompleteProfile = () => {
    completeProfile(uid);
    navigation.navigate("JournalCreated", { type: "Profile" });
  };

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
                ? (track(steps[profileStep].trackEvent),
                  handleCompleteProfile())
                : handleNextProfileStep();
            }
          }}
        />
        <SkipQuestion
          onPress={() => {
            {
              profileStep === 4
                ? (track(steps[profileStep].trackSkipEvent),
                  handleCompleteProfile())
                : handleSkipQuestion();
            }
          }}
        />
        <ProgressDots progress={profileStep} total={6} />
      </ButtonSection>
    </>
  );
};
