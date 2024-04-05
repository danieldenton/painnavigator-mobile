import React from "react";
import { JournalQuestionAndIntensitySlider } from "../../../components/JournalQuestionAndIntensitySlider";

export const Recommend = ({ setState, value }) => {
  return (
    <JournalQuestionAndIntensitySlider
      question={
        "On a scale of 1-10, how likely are you to recommend the PainNavigator app to others?"
      }
      helpText={"0 is not at all, 10 is very likely"}
      setState={setState}
      objectKey={"recommendation"}
      value={value}
    />
  );
};
