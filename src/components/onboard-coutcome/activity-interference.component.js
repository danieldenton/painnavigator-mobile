import React, { useContext } from "react";
import { JournalQuestionAndIntensitySlider } from "../JournalQuestionAndIntensitySlider";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const ActivityInterference = () => {
  const { onboardingData, setOnboardingData } = useContext(
    AuthenticationContext
  );
  const { activityInterference } = onboardingData;
  return (
    <JournalQuestionAndIntensitySlider
      question={
        "What number best describes how, during the past week, pain has interfered with your general activity?"
      }
      helpText={
        "0 is not at all, 10 is pain has made normal activities impossible"
      }
      setState={setOnboardingData}
      objectKey={"activityInterference"}
      value={activityInterference}
    />
  );
};
