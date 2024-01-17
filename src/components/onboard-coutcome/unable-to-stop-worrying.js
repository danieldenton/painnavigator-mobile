import React, { useContext } from "react";
import { JournalQuestion } from "../journal-question.component";
import { SingleSelectCheckBox } from "../checkbox/single-select-checkbox.component";
import { View } from "react-native";
import { options } from "./options.json";
import { setObjectState } from "../../utils";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const UnableToStopWorrying = () => {
  const { onbaordingData, setOnboardingData } = useContext(
    AuthenticationContext
  );
  const { unableToStopWorrying } = onbaordingData;
  const add = (optionId) => {
    setOnboardingData((object) => ({
      ...object,
      unableToStopWorrying: optionId,
    }));
  };

  const opts = options.map((option) => {
    return (
      <SingleSelectCheckBox
        add={add}
        key={option.id}
        optionData={option}
        selectedOption={unableToStopWorrying}
      />
    );
  });

  return (
    <>
      <JournalQuestion
        question={
          "Over the last 2 weeks, how often have you been bothered by the following problem: not being able to stop or control worrying?"
        }
        helpText={"Choose one"}
      />
      <View style={{ marginBottom: 140 }}>{opts}</View>
    </>
  );
};
