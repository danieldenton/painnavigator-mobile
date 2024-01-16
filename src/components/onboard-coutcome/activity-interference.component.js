import React from "react";
import { JournalQuestionAndIntensitySlider } from "../JournalQuestionAndIntensitySlider";

export const ActivityInterference = ({ data, setState, setObjectState }) => {
  return (
    <JournalQuestionAndIntensitySlider
      question={
        "What number best describes how, during the past week, pain has interfered with your general activity?"
      }
      helpText={
        "0 is not at all, 10 is pain has made normal activities impossible"
      }
      value={data.activityInterference}
      setObjectState={setObjectState}
      setState={setState}
      state={"activityInterference"}
    />
  );
};
