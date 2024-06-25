import React, { useContext } from "react";
import { JournalQuestionAndIntensitySlider } from "../../../components/JournalQuestionAndIntensitySlider";
import { OnboardContext } from "../../../services/onboard/onboard.context";

export const AvgPainPreStart = () => {
  const { onboardingData, setOnboardingData } = useContext(OnboardContext);
  const { startingPainScore } = onboardingData;

  return (
    <JournalQuestionAndIntensitySlider
      question={
        "What number best describes your pain on average in the past week?"
      }
      helpText={"0 is no pain, 10 is the worst pain you can imagine"}
      setState={setOnboardingData}
      objectKey={"startingPainScore"}
      value={startingPainScore}
    />
  );
};
