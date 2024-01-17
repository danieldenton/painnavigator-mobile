import React from "react";
import { JournalQuestionAndIntensitySlider } from "../JournalQuestionAndIntensitySlider";

export const ActivityInterference = ({ setState, value }) => {
  return (
    <JournalQuestionAndIntensitySlider
      question={
        "What number best describes how, during the past week, pain has interfered with your general activity?"
      }
      helpText={
        "0 is not at all, 10 is pain has made normal activities impossible"
      }
      setState={setState}
      objectKey={"activityInterference"}
      value={value}
    />
  );
};
