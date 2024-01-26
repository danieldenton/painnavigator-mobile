import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { JournalQuestionAndIntensitySlider } from "../../../components/JournalQuestionAndIntensitySlider";

export const Recommend = () => {
  const { outcomeData, setOutcomeData } = useContext(AuthenticationContext);
  const { recommendation } = outcomeData;

  return (
    <JournalQuestionAndIntensitySlider
      question={
        "On a scale of 1-10, how likely are you to recommend the PainNavigator app to others?"
      }
      helpText={"0 is not at all, 10 is very likely"}
      setState={setOutcomeData}
      objectKey={"recommendation"}
      value={recommendation}
    />
  );
};
