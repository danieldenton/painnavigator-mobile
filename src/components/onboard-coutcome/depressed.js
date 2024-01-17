import React, { useContext } from "react";
import { JournalQuestion } from "../journal-question.component";
import { SingleSelectCheckBox } from "../checkbox/single-select-checkbox.component";
import { View } from "react-native";
import { options } from "./options.json";
import { setObjectState } from "../../utils";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Depressed = () => {
  const { onboardingData, setOnboardingData } = useContext(
    AuthenticationContext
  );
  const { depressed } = onboardingData;
  const add = (optionId) => {
    setOnboardingData((object) => ({
      ...object,
      depressed: optionId,
    }));
  };

  const opts = options.map((option) => {
    return (
      <SingleSelectCheckBox
        add={add}
        key={option.id}
        optionData={option}
        selectedOption={depressed}
      />
    );
  });

  return (
    <>
      <JournalQuestion
        question={
          "Over the last 2 weeks, how often have you been bothered by the following problem: feeling down, depressed, or hopeless?"
        }
        helpText={"Choose one"}
      />
      <View style={{ marginBottom: 140 }}>{opts}</View>
    </>
  );
};
