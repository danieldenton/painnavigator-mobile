import React, { useContext } from "react";
import { JournalQuestionAndIntensitySlider } from "../JournalQuestionAndIntensitySlider";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const EnjoymentOfLife = () => {
  const { onboardingData, setOnboardingData } = useContext(
    AuthenticationContext
  );
  const { enjoymentOfLife } = onboardingData;
  return (
    <JournalQuestionAndIntensitySlider
      question={
        "What number best describes how, during the past week, pain has interfered with your enjoyment of life?"
      }
      helpText={"0 is no pain, 10 is pain has taken away all enjoyment of life"}
      setState={setOnboardingData}
      objectKey={"enjoymentOfLife"}
      value={enjoymentOfLife}
    />
  );
};
