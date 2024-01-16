import React, { useContext } from "react";
import { JournalQuestion } from "../journal-question.component";
import { SingleSelectCheckBox } from "../checkbox/single-select-checkbox.component";
import { View } from "react-native";
import { options } from "./options.json";
import { setObjectState } from "../../utils";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Anxious = () => {
  const { onbaordingData, setOnaboardingData } = useContext(
    AuthenticationContext
  );
  const add = (optionId) => {
    setObjectState(optionId, "anxious", setOnaboardingData);
  };

  const opts = options.map((option) => {
    return (
      <SingleSelectCheckBox
        add={add}
        key={option.id}
        optionData={option}
        selectedOption={onbaordingData.anxious}
      />
    );
  });

  return (
    <>
      <JournalQuestion
        question={
          "Over the last 2 weeks, how often have you been bothered by the following problem: feeling nervous, anxious or on edge?"
        }
        helpText={"Choose one"}
      />
      <View style={{ marginBottom: 140 }}>{opts}</View>
    </>
  );
};
